import { n as __toESM } from "../_runtime.mjs";
import { a as LOCAL_BUSINESS_SCHEMA, c as SITE_NAME, d as buildJsonLdScript, f as hero_default, i as FONT_STYLESHEET_HREF, l as SITE_TITLE, o as OG_IMAGE, r as FAQ_SCHEMA, s as SITE_DESCRIPTION, t as BREADCRUMB_SCHEMA, u as SITE_URL_WITH_SLASH } from "./hero-BZ5dFgXN.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C4eUVIFU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CFJOZt37.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: SITE_NAME },
			{
				name: "description",
				content: SITE_DESCRIPTION
			},
			{
				name: "author",
				content: SITE_NAME
			},
			{
				name: "robots",
				content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
			},
			{
				name: "theme-color",
				content: "#d32f2f"
			},
			{
				property: "og:site_name",
				content: SITE_NAME
			},
			{
				property: "og:locale",
				content: "it_IT"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: SITE_NAME
			},
			{
				property: "og:description",
				content: SITE_DESCRIPTION
			},
			{
				property: "og:image",
				content: OG_IMAGE
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: SITE_NAME
			},
			{
				name: "twitter:description",
				content: SITE_DESCRIPTION
			},
			{
				name: "twitter:image",
				content: OG_IMAGE
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: FONT_STYLESHEET_HREF
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "it",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter = () => import("./routes-CzVHap2J.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: SITE_TITLE },
			{
				name: "description",
				content: SITE_DESCRIPTION
			},
			{
				name: "robots",
				content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
			},
			{
				property: "og:title",
				content: SITE_TITLE
			},
			{
				property: "og:description",
				content: SITE_DESCRIPTION
			},
			{
				property: "og:type",
				content: "restaurant"
			},
			{
				property: "og:site_name",
				content: SITE_NAME
			},
			{
				property: "og:locale",
				content: "it_IT"
			},
			{
				property: "og:url",
				content: SITE_URL_WITH_SLASH
			},
			{
				property: "og:image",
				content: OG_IMAGE
			},
			{
				property: "og:image:alt",
				content: "Sottosale Fishbar a Roseto degli Abruzzi"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: SITE_TITLE
			},
			{
				name: "twitter:description",
				content: SITE_DESCRIPTION
			},
			{
				name: "twitter:image",
				content: OG_IMAGE
			}
		],
		links: [{
			rel: "canonical",
			href: SITE_URL_WITH_SLASH
		}, {
			rel: "preload",
			as: "image",
			href: hero_default
		}],
		scripts: [
			buildJsonLdScript(LOCAL_BUSINESS_SCHEMA),
			buildJsonLdScript(BREADCRUMB_SCHEMA),
			buildJsonLdScript(FAQ_SCHEMA)
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
