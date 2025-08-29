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
		<div className="space-y-6">
			<div className="flex gap-3">
				<input
					value={newModel}
					onChange={(e) => setNewModel(e.target.value)}
					placeholder="llama3:instruct"
					className="flex-1 px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
				/>
				<button
					onClick={() => newModel.trim() && pullModel(newModel.trim())}
					className="px-6 py-3 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white rounded-xl font-medium shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
				>
					Pull
				</button>
				<button
					onClick={fetchModels}
					className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-all duration-200 transform hover:-translate-y-0.5"
				>
					Refresh
				</button>
			</div>

			<div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
				{models.map((m, index) => (
					<div key={m.name} className={`p-4 flex items-center justify-between gap-4 group transition-all duration-200 hover:bg-gray-50 ${index !== models.length - 1 ? 'border-b border-gray-100' : ''}`}>
						<div className="min-w-0 flex-1">
							<div className="text-sm font-semibold text-gray-900 truncate mb-1">{m.name}</div>
							<div className="text-xs text-gray-500 truncate">{(m.size / (1024*1024*1024)).toFixed(1)} GB</div>
						</div>
						<div className="flex items-center gap-2 flex-shrink-0">
							<button
								className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 ${
									currentModel === m.name 
										? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white border-gray-900 shadow-sm' 
										: 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
								}`}
								onClick={() => setCurrentModel(m.name)}
							>
								{currentModel === m.name ? 'In use' : 'Use'}
							</button>
							<button className="p-2.5 hover:bg-gray-100 rounded-xl transition-all duration-200 text-gray-500 hover:text-gray-700" onClick={async () => alert(JSON.stringify(await showModel(m.name), null, 2))} title="Model Info">
								<Info size={16} />
							</button>
							<button className="p-2.5 hover:bg-gray-100 rounded-xl transition-all duration-200 text-gray-500 hover:text-gray-700" onClick={() => pullModel(m.name)} title="Update Model">
								<Download size={16} />
							</button>
							<button className="p-2.5 hover:bg-red-50 text-red-500 hover:text-red-600 rounded-xl transition-all duration-200" onClick={() => deleteModel(m.name)} title="Delete Model">
								<Trash2 size={16} />
							</button>
							<button
								className={`p-2.5 rounded-xl transition-all duration-200 ${
									defaultModel === m.name 
										? 'text-green-600 bg-green-50' 
										: 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
								}`}
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
				<div className="space-y-3">
					<h3 className="text-sm font-semibold text-gray-900 mb-3">Active Downloads</h3>
					{Object.entries(pulls).map(([id, p]: any) => (
						<div key={id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
							<div className="flex items-center justify-between mb-3">
								<div className="text-sm font-medium text-gray-900">{p.name}</div>
								<div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
									{p.status}
								</div>
							</div>
										{p.progress && (
												<div className="space-y-2">
													{(() => {
														const prog = p.progress || {}
														const completed = Number(prog.completed ?? prog.downloaded ?? 0)
														const total = Number(prog.total ?? prog.size ?? 0)
														const percent = total > 0 ? Math.floor((completed / total) * 100) : 0
														return <ProgressBar value={percent} />
													})()}
													<div className="flex justify-between text-xs text-gray-500">
														<span>
															{(() => {
																const prog = p.progress || {}
																const completed = Number(prog.completed ?? prog.downloaded ?? 0)
																const total = Number(prog.total ?? prog.size ?? 0)
																return total > 0 ? `${(completed/1e6).toFixed(1)}MB / ${(total/1e6).toFixed(1)}MB` : p.status
															})()}
														</span>
														<span>
															{(() => {
																const prog = p.progress || {}
																const completed = Number(prog.completed ?? prog.downloaded ?? 0)
																const total = Number(prog.total ?? prog.size ?? 0)
																return total > 0 ? `${Math.floor((completed / total) * 100)}%` : ''
															})()}
														</span>
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
