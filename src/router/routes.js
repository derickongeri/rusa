<<<<<<< HEAD
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
=======

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/auth",
        name: "auth",
        component: () => import("pages/user/indexPage.vue"),
      },
      {
        path: "/meta/language",
        name: "lang",
        component: () => import("pages/user/languageSelection.vue"),
      },
      {
        path: "/meta/user",
        name: "meta",
        component: () => import("pages/user/userMeta.vue"),
      },
    ],
  },
  {
    path: "/home",
    component: () => import("layouts/contentLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/home.vue"),
        meta: { title: "Home" },
      },
      {
        path: "/utu",
        name: "utu",
        component: () => import("pages/community.vue"),
        meta: { title: "Community" },
      },
      {
        path: "/siku",
        name: "siku",
        component: () => import("pages/logs.vue"),
        meta: { title: "Logs" },
      },
      {
        path: "/maarifa",
        name: "maarifa",
        component: () => import("pages/insights.vue"),
        meta: { title: "Insights" },
      },
    ],
  },

  {
    path: "/Logs",
    component: () => import("layouts/journalLayout.vue"),
    children: [
      {
        path: "/signs",
        component: () => import("pages/Journal/singsJournal.vue"),
        meta: { title: "Log Sings" },
      },
    ],
>>>>>>> dd584b2becd4cec6727fd98c33411a874e44f9c5
  },

  // Always leave this as last one,
  // but you can also remove it
  {
<<<<<<< HEAD
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
=======
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];
>>>>>>> dd584b2becd4cec6727fd98c33411a874e44f9c5

export default routes
