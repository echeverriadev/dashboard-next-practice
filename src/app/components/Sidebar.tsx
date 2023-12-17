import Image from 'next/image'
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={20} />,
    title: 'Dashboard',
    subtitle: 'Data Overview'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={20} />,
    title: 'Counter',
    subtitle: 'Client side state'
  }
];

export default function Sidebar() {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          CarlosDash
        </h1>
        <p className="text-slate-500 text-sm">
          Dashboar to practice nextjs
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <Image className="rounded-full w-8 h-8" width={50} height={50} src={'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c'} alt={'profile picture'} />
          <span className="text-sm md:text-base font-bold">Carlos Echeverría</span>
        </a>
      </div>

      <div id="nav" className="w-full px-2">
        {
          menuItems.map(item => (
            <SidebarMenuItem key={item.path} {...item} />
          ))
        }
      </div>
    </div>
  );
}
