function CategoryTabs({categories, activeTab, setActiveTab}) {
  return (
    <div className="tabs-container">
      {categories.map(cat => (
        <button
          key={cat.menu_category}
          type="button"
          className={`tab ${activeTab === cat.menu_category ? 'active' : ''}`}
          onClick={() => setActiveTab(cat.menu_category)}
        >
          {cat.menu_category}
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs
