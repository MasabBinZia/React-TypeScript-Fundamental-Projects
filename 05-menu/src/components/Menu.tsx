import React from 'react';

interface MenuItem {
  id: number;
  title: string;
  img: string;
  desc: string;
  price: number;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className='section-center w-90vw mx-auto max-w-7xl grid gap-y-12 gap-x-8 justify-items-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item grid gap-y-4 gap-x-8 max-w-[25rem]'>
            <img src={img} alt={title} className='photo object-cover h-48 w-full border-2 border-gold rounded block' />
            <div className='item-info'>
              <header className='flex justify-between border-b border-dotted border-black'>
                <h4 className='mb-2 text-2xl font-semibold'>{title}</h4>
                <h4 className='inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-yellow-600 rounded'>${price}</h4>
              </header>
              <p className='item-text mb-0 pt-4'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
