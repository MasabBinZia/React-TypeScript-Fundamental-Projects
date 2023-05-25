import { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './data';

const allCategories: string[] = ['all', ...new Set(items.map((item) => item.category))];

interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);
  const [categories, setCategories] = useState<string[]>(allCategories);

  const filterItems = (category: string): void => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section py-20">
        <div className="title text-center mb-8">
          <h2 className='text-6xl underline '>our menu</h2>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
