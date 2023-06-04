import React, { useState } from "react";
import user1 from "./assets/img/user1.png";
import { v4 } from "uuid";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Hero from "./components/main/Hero";

interface Item {
  id: any;
  title: string;
  desc: string;
  bool: boolean;
  people: number;
  count: number;
  img: string;
  name: string;
}

interface Board {
  id: any;
  title: string;
  items: Item[];
}
const App: React.FC = () => {
  const [boards, setBoards] = useState<Board[]>([
    {
      id: v4(),
      title: "Новые",
      items: [
        {
          id: v4(),
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: v4(),
          title: "Маркетолог",
          desc: "Отдел разработки мобильного",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: v4(),
          title: "Менеджер по продажам",
          desc: "Отдел приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
      ],
    },
    {
      id: v4(),
      title: "Текущие",
      items: [
        {
          id: v4(),
          title: "PHP Developer",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: v4(),
          title: "Freshers",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: v4(),
          title: "Joomla Developer",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
      ],
    },
    {
      id: v4(),
      title: "Закрытые",
      items: [],
    },
    {
      id: v4(),
      title: "Архив",
      items: [
        {
          id: v4(),
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: v4(),
          title: "Маркетолог",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: v4(),
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
      ],
    },
    {
      id: v4(),
      title: "Удаленные",
      items: [
        {
          id: v4(),
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: v4(),
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: v4(),
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: v4(),
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: v4(),
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: v4(),
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: v4(),
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: v4(),
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
      ],
    },
  ]);
  return (
    <>
      <Header />
      <Sidebar />
      <Hero boards={boards} setBoards={setBoards} />
    </>
  );
};

export default App;
