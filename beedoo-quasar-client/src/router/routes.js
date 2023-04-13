const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/TestesPage.vue"),
      },
    ],
  },
  {
    path: "/pergunta/:parentId",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "pergunta",
        component: () => import("pages/_PerguntasPage.vue"),
      },
    ],
    // props: true
  },
  {
    path: "/resposta",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/RespostasPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
