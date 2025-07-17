import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobsView from "@/views/JobsView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJob from "@/views/EditJob.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/job/:id",
      name: "job",
      component: JobView,
    },
    {
      path: "/jobs/add",
      name: "job-add",
      component: AddJobView,
    },
    {
      path: "/jobs/edit/:id",
      name: "edit-job",
      component: EditJob,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
