const imageMapping = {
  "/assets/project-1.png": "assets/project-1-C48lB_pj.webp",
  "/assets/project-2.png": "assets/project-2-DArbZnGn.webp",
  "/assets/project-3.png": "assets/project-3-CmZko-eC.webp",
  "/assets/project-4.png": "assets/project-4-DCqNyjv4.webp",
  "/assets/project-5.png": "assets/project-5-DJJIwoVu.webp",
  "/assets/project-6.png": "assets/project-6-DAG7pHFJ.webp",
  "/assets/wrap.png": "assets/wrap-meOhLa17.webp",
  "/assets/wrap-3.png": "assets/wrap-3-CoilA707.webp",
  "/assets/wrap-4.png": "assets/wrap-4-CdLiPAmf.webp",
  "/assets/wrap-5.png": "assets/wrap-5-D62adZ9C.webp",
  "/assets/project-latinjob.png": "assets/project-latinjob-BrE7hgMR.webp",
  "/assets/wrap-1-2.png": "assets/wrap-1-2-54Ndnpt5.webp",
  "/assets/wrap-6.png": "assets/wrap-6-D4i0pZKI.webp",
  "/assets/wrap-1-3.png": "assets/wrap-1-3-YLZtiwbk.webp",
  "/assets/wrap-7.png": "assets/wrap-7-C3flMevC.webp",
  "/assets/wrap-1-4.png": "assets/wrap-1-4-D64pLhLv.webp",
  "/assets/wrap-8.png": "assets/wrap-8-4ElZHly7.webp"
};

export const getImageUrl = (path) => {
  const mapped = imageMapping[path] || path;
  // Si comienza con /, quitar la / para hacerlo relativo
  return mapped.startsWith('/') ? mapped.slice(1) : mapped;
};
