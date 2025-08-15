"use client"

import { useEffect, useState } from "react"
import { CategorySidebar } from "./category-sidebar"
import { CategoryContent } from "./category-content"
import { useGetCategoryQuery } from "@/lib/redux/services/categoriesApi"
import { useGetResourcesQuery } from "@/lib/redux/services/resourceApi"


export function CategoriesLayout() {
	const { data: categories } = useGetCategoryQuery()
	const { data: resources } = useGetResourcesQuery()
	const [selectedCategory, setSelectedCategory] = useState("all")
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)


	const filteredResources =
		selectedCategory === "all"
			? resources
			: resources?.filter((resource) => resource.category === selectedCategory)

	const currentCategory = categories?.find((cat) => cat?.id === selectedCategory)

	const defaultCategory = {
		id: "all",
		name: "All Resources",
		description: "Browse all available resources",
		count: 12,
		icon: "🌟",
	}

	return (
		<div className="min-h-screen">
			{/* Page Header */}
			<div className=" lg:ml-80 bg-gradient-to-r from-blue-900/20 via-slate-900/50 to-blue-900/20 border-b border-slate-800">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<div className="text-center">
						<h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
							<span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
								Browse by Category
							</span>
						</h1>
						<p className="text-xl text-slate-400 max-w-3xl mx-auto">
							Discover design resources organized by category. Find exactly what
							you need for your next project.
						</p>
					</div>
				</div>
			</div>

			<div className="flex">
				{/* Sidebar */}
				<CategorySidebar
					categories={categories ?? []}
					selectedCategory={selectedCategory}
					onCategorySelect={setSelectedCategory}
					isOpen={isSidebarOpen}
					onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
				/>

				{/* Main Content */}
				<div className="flex-1 lg:ml-80">
					<CategoryContent
						category={currentCategory ?? defaultCategory}
						resources={filteredResources ?? []}
						onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
					/>
				</div>
			</div>

			{/* No Results */}
			{resources?.length === 0 && (
				<div className="text-center py-16">
					<div className="text-6xl mb-4">🔍</div>
					<h3 className="text-xl font-semibold text-slate-300 mb-2">
						No resources found
					</h3>
					<p className="text-slate-500">
						Try adjusting your search or category filter
					</p>
				</div>
			)}
		</div>
	)
}
