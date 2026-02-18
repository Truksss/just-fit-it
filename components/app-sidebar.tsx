"use client"

import * as React from "react"
import {
  ClipboardClock,
  Settings2,
  Salad,
  Dumbbell,
  BotMessageSquare,
  House
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Just Fit It",
      logo: "/images/barbell.png",
      plan: "Dashboard",
    }
  ],
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
      
    },
    {
      title: "Workouts",
      url: "#",
      icon: Dumbbell,
      isActive: true,
      items: [
        {
          title: "Daily Workouts",
          url: "#",
        },
        {
          title: "Workout History",
          url: "#",
        },
        {
          title: "Workout Builder",
          url: "#",
        },
      ],
    },
    {
      title: "Nutrition",
      url: "#",
      icon: Salad,
      items: [
        {
          title: "Meal Plans",
          url: "#",
        },
        {
          title: "Daily Calories Breakdown",
          url: "#",
        },
        {
          title: "Recipe Builder",
          url: "#",
        },
      ],
    },
    {
      title: "Progress Tracking",
      url: "#",
      icon: ClipboardClock,
      items: [
        {
          title: "Weight Tracker",
          url: "#",
        },
        {
          title: "Body Measurements",
          url: "#",
        },
        {
          title: "Progress Graphs",
          url: "#",
        },
        {
          title: "Progress Reports",
          url: "#",
        },
      ],
    },
    {
      title: "AI Coach",
      url: "#",
      icon: BotMessageSquare,
      items: [
        {
          title: "Personalized Workouts",
          url: "#",
        },
        {
          title: "AI Chatbot",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
