import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("privacy", "routes/privacy.tsx"),
    route("terms", "routes/terms.tsx"),
    route("faq", "routes/faq.tsx"),
    route("contact", "routes/contact.tsx"),
    route("products/cartsnap", "routes/products/cartsnap.tsx"),
    route("products/accessifix", "routes/products/accessifix.tsx"),
] satisfies RouteConfig;
