import { useState } from 'react'
import { useModelsStore } from '../store/modelsStore'
import { Download, Trash2, Info, Check } from 'lucide-react'
import { useChatStore } from '../store/chatStore'
import { useSettingsStore } from '../store/settingsStore'
import ProgressBar from './ProgressBar'

export default function ModelPicker() {
	const { models, fetchModels, pullModel, deleteModel, showModel, pulls } = useModelsStore()
	const { setCurrentModel, currentModel } = useChatStore()
	const { setDefaultModel, saveSettingsToBackend, defaultModel } = useSettingsStore()
	const [newModel, setNewModel] = useState('')

	return (
		<div className="space-y-4">
			<div className="flex gap-2">
				<input
					value={newModel}
					onChange={(e) => setNewModel(e.target.value)}
					placeholder="llama3:instruct"
					className="flex-1 px-3 py-2 border border-gray-200 rounded-lg"
				/>
				<button
					onClick={() => newModel.trim() && pullModel(newModel.trim())}
					className="px-3 py-2 bg-black text-white rounded-lg"
				>
					Pull
				</button>
				<button
					onClick={fetchModels}
					className="px-3 py-2 bg-gray-100 rounded-lg"
				>
					Refresh
				</button>
			</div>

			<div className="divide-y border rounded-lg">
				{models.map((m) => (
					<div key={m.name} className="p-3 flex items-center justify-between gap-3">
						<div className="min-w-0">
							<div className="text-sm font-medium text-gray-900 truncate">{m.name}</div>
							<div className="text-xs text-gray-500 truncate">{(m.size / (1024*1024*1024)).toFixed(1)} GB</div>
						</div>
						<div className="flex items-center gap-2 flex-shrink-0">
							<button
								className={`px-2 py-1 text-xs rounded border ${currentModel === m.name ? 'bg-black text-white border-black' : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-200'}`}
								onClick={() => setCurrentModel(m.name)}
							>
								{currentModel === m.name ? 'In use' : 'Use'}
							</button>
							<button className="p-2 hover:bg-gray-100 rounded" onClick={async () => alert(JSON.stringify(await showModel(m.name), null, 2))} title="Info">
								<Info size={16} />
							</button>
							<button className="p-2 hover:bg-gray-100 rounded" onClick={() => pullModel(m.name)} title="Pull">
								<Download size={16} />
							</button>
							<button className="p-2 hover:bg-red-50 text-red-600 rounded" onClick={() => deleteModel(m.name)} title="Delete">
								<Trash2 size={16} />
							</button>
							<button
								className={`p-2 rounded ${defaultModel === m.name ? 'text-green-600' : 'hover:bg-gray-100 text-gray-700'}`}
								title={defaultModel === m.name ? 'Default model' : 'Set as default'}
								onClick={async () => { setDefaultModel(m.name); await saveSettingsToBackend(); }}
							>
								<Check size={16} />
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Active pulls */}
			{Object.entries(pulls).length > 0 && (
				<div className="space-y-2">
					{Object.entries(pulls).map(([id, p]: any) => (
						<div key={id} className="p-2 border rounded-lg">
							<div className="text-xs text-gray-600">{p.name} — {p.status}</div>
										{p.progress && (
												<div className="mt-2 space-y-1">
													{(() => {
														const prog = p.progress || {}
														const completed = Number(prog.completed ?? prog.downloaded ?? 0)
														const total = Number(prog.total ?? prog.size ?? 0)
														const percent = total > 0 ? Math.floor((completed / total) * 100) : 0
														return <ProgressBar value={percent} />
													})()}
													<div className="text-[10px] text-gray-500">
														{(() => {
															const prog = p.progress || {}
															const completed = Number(prog.completed ?? prog.downloaded ?? 0)
															const total = Number(prog.total ?? prog.size ?? 0)
															const pct = total > 0 ? Math.floor((completed / total) * 100) : 0
															return total > 0 ? `${(completed/1e6).toFixed(1)}MB / ${(total/1e6).toFixed(1)}MB (${pct}%)` : p.status
														})()}
													</div>
												</div>
										)}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
