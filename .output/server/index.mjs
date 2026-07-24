globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"5af6-kXRuxK23icc8X1ttw6y0E6WWJ7I\"",
		"mtime": "2026-07-24T12:42:53.858Z",
		"size": 23286,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"46-+qGebJ3GSAxFvh5GXf/3/IcRuWw\"",
		"mtime": "2026-07-24T15:07:26.486Z",
		"size": 70,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"110-V/BPgJcI+KrrZE1HLiAY2cJOO6w\"",
		"mtime": "2026-07-24T15:07:39.129Z",
		"size": 272,
		"path": "../public/sitemap.xml"
	},
	"/og-image.jpg": {
		"type": "image/jpeg",
		"etag": "\"3aba8-hninsQDKZ4gyn5DRk2w/eVE5bU4\"",
		"mtime": "2026-07-24T12:44:03.185Z",
		"size": 240552,
		"path": "../public/og-image.jpg"
	},
	"/assets/aperitivo-lSaggNjp.jpg": {
		"type": "image/jpeg",
		"etag": "\"36285-b1scfE1dL04U5FsE55pWeawl3LI\"",
		"mtime": "2026-07-24T15:09:39.272Z",
		"size": 221829,
		"path": "../public/assets/aperitivo-lSaggNjp.jpg"
	},
	"/assets/dish-anchovies-BMsssdQ8.jpg": {
		"type": "image/jpeg",
		"etag": "\"e484-m/O1ZdCBmYWsDQZWjwu86oHduG4\"",
		"mtime": "2026-07-24T15:09:39.273Z",
		"size": 58500,
		"path": "../public/assets/dish-anchovies-BMsssdQ8.jpg"
	},
	"/assets/dish-beer-BB13nTIx.jpg": {
		"type": "image/jpeg",
		"etag": "\"a7f0-/KqIgTuCX5hJJaJT3xhIylGY5gE\"",
		"mtime": "2026-07-24T15:09:39.274Z",
		"size": 42992,
		"path": "../public/assets/dish-beer-BB13nTIx.jpg"
	},
	"/assets/dish-cheesecake-DajgxU_q.jpg": {
		"type": "image/jpeg",
		"etag": "\"13a15-O/ULVshUCk4gxiMVd0QbsADnsyI\"",
		"mtime": "2026-07-24T15:09:39.274Z",
		"size": 80405,
		"path": "../public/assets/dish-cheesecake-DajgxU_q.jpg"
	},
	"/assets/dish-drinks-C8N8aPrb.jpg": {
		"type": "image/jpeg",
		"etag": "\"10d46-WcldHIPXqyR2/N7Jy5n5pRhSpEQ\"",
		"mtime": "2026-07-24T15:09:39.276Z",
		"size": 68934,
		"path": "../public/assets/dish-drinks-C8N8aPrb.jpg"
	},
	"/assets/dish-cocktails-ZgdhmLA6.jpg": {
		"type": "image/jpeg",
		"etag": "\"14cd5-Ft28oH+GQGhZ+t4EOJzWblLiHvI\"",
		"mtime": "2026-07-24T15:09:39.275Z",
		"size": 85205,
		"path": "../public/assets/dish-cocktails-ZgdhmLA6.jpg"
	},
	"/assets/dish-fishbuns-Cl4DDZD4.jpg": {
		"type": "image/jpeg",
		"etag": "\"e7d0-352uVQMEmk9uZ4nQAyQ2UZkY/mo\"",
		"mtime": "2026-07-24T15:09:39.276Z",
		"size": 59344,
		"path": "../public/assets/dish-fishbuns-Cl4DDZD4.jpg"
	},
	"/assets/dish-fries-zHtCK0FU.jpg": {
		"type": "image/jpeg",
		"etag": "\"b635-LLfQRiJpZPLbNr9B+dZxJuHM1oY\"",
		"mtime": "2026-07-24T15:09:39.280Z",
		"size": 46645,
		"path": "../public/assets/dish-fries-zHtCK0FU.jpg"
	},
	"/assets/dish-fritto-XX-OMFI1.jpg": {
		"type": "image/jpeg",
		"etag": "\"13a7c-H0l80zvKMEk9xqr4JOXw5eAxZi8\"",
		"mtime": "2026-07-24T15:09:39.282Z",
		"size": 80508,
		"path": "../public/assets/dish-fritto-XX-OMFI1.jpg"
	},
	"/assets/dish-gin-_3ooea16.jpg": {
		"type": "image/jpeg",
		"etag": "\"bd1f-1jwruRTdd9dRoYL9D0zSxMdV8TI\"",
		"mtime": "2026-07-24T15:09:39.283Z",
		"size": 48415,
		"path": "../public/assets/dish-gin-_3ooea16.jpg"
	},
	"/assets/dish-gnocchi-CUZDGPh6.jpg": {
		"type": "image/jpeg",
		"etag": "\"d7b5-tQ8+kSMZkeeashtLo4exfkC+rBE\"",
		"mtime": "2026-07-24T15:09:39.284Z",
		"size": 55221,
		"path": "../public/assets/dish-gnocchi-CUZDGPh6.jpg"
	},
	"/assets/dish-mussels-VZNmp_n3.jpg": {
		"type": "image/jpeg",
		"etag": "\"ba55-xPmrECD5z/+jvIm4lxqH+eHVLmQ\"",
		"mtime": "2026-07-24T15:09:39.285Z",
		"size": 47701,
		"path": "../public/assets/dish-mussels-VZNmp_n3.jpg"
	},
	"/assets/dish-octopus-eenaKvGV.jpg": {
		"type": "image/jpeg",
		"etag": "\"24d37-LjuzW4+85+LCXM6EN7mC0qMrc24\"",
		"mtime": "2026-07-24T15:09:39.286Z",
		"size": 150839,
		"path": "../public/assets/dish-octopus-eenaKvGV.jpg"
	},
	"/assets/dish-salmon-CZGfjaVB.jpg": {
		"type": "image/jpeg",
		"etag": "\"f331-VXCccSUCCRi4nvd/AULFRT7CJss\"",
		"mtime": "2026-07-24T15:09:39.287Z",
		"size": 62257,
		"path": "../public/assets/dish-salmon-CZGfjaVB.jpg"
	},
	"/assets/dish-seafood-salad-DadPGIhp.jpg": {
		"type": "image/jpeg",
		"etag": "\"13f59-yBHV4QxsiwTjZUUZy7zAdNKIEFg\"",
		"mtime": "2026-07-24T15:09:39.288Z",
		"size": 81753,
		"path": "../public/assets/dish-seafood-salad-DadPGIhp.jpg"
	},
	"/assets/dish-shrimp-Bqftnh8R.jpg": {
		"type": "image/jpeg",
		"etag": "\"af4d-+hISPlca6//16s+b2Mipn3mt+a8\"",
		"mtime": "2026-07-24T15:09:39.288Z",
		"size": 44877,
		"path": "../public/assets/dish-shrimp-Bqftnh8R.jpg"
	},
	"/assets/dish-skewers-C0FqSmxh.jpg": {
		"type": "image/jpeg",
		"etag": "\"113ed-5zkPzkARLOcGiNe96ZNUdcbdwnk\"",
		"mtime": "2026-07-24T15:09:39.289Z",
		"size": 70637,
		"path": "../public/assets/dish-skewers-C0FqSmxh.jpg"
	},
	"/assets/dish-tagliolini-TXlMPxnj.jpg": {
		"type": "image/jpeg",
		"etag": "\"19961-EciSMOpL17/QGeTT94aHTVpAzG8\"",
		"mtime": "2026-07-24T15:09:39.290Z",
		"size": 104801,
		"path": "../public/assets/dish-tagliolini-TXlMPxnj.jpg"
	},
	"/assets/dish-tartare-Dc_oBWpo.jpg": {
		"type": "image/jpeg",
		"etag": "\"163a1-pnnpO1ewxIe1dU0FgwFhzrKLCFQ\"",
		"mtime": "2026-07-24T15:09:39.291Z",
		"size": 91041,
		"path": "../public/assets/dish-tartare-Dc_oBWpo.jpg"
	},
	"/assets/dish-tuna-C48I6yEY.jpg": {
		"type": "image/jpeg",
		"etag": "\"ef6b-7YsDVw2zBDL0ffRiFLWuA9HWwwA\"",
		"mtime": "2026-07-24T15:09:39.291Z",
		"size": 61291,
		"path": "../public/assets/dish-tuna-C48I6yEY.jpg"
	},
	"/assets/dish-wine-CJimiNJp.jpg": {
		"type": "image/jpeg",
		"etag": "\"f926-bKv/x4vM7zepV+rD7DKxip4e19g\"",
		"mtime": "2026-07-24T15:09:39.292Z",
		"size": 63782,
		"path": "../public/assets/dish-wine-CJimiNJp.jpg"
	},
	"/assets/routes-Dy_IK9PF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e94d-Cgt1ThsjdJd6soWl+sqqCXYxTEw\"",
		"mtime": "2026-07-24T15:09:39.271Z",
		"size": 125261,
		"path": "../public/assets/routes-Dy_IK9PF.js"
	},
	"/assets/index-Tdb1DbNL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54db8-Kka+B4j5vVorC64gOH57+9f1VJE\"",
		"mtime": "2026-07-24T15:09:39.270Z",
		"size": 347576,
		"path": "../public/assets/index-Tdb1DbNL.js"
	},
	"/assets/menu-DygnFHMD.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c3ea-iraZMDhhWxtGYn9rItA0jDIWF1o\"",
		"mtime": "2026-07-24T15:09:39.294Z",
		"size": 377834,
		"path": "../public/assets/menu-DygnFHMD.jpg"
	},
	"/assets/styles-CFJOZt37.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14df2-AhZ1o2woXKmKzKFdvIuRQYANOcw\"",
		"mtime": "2026-07-24T15:09:39.295Z",
		"size": 85490,
		"path": "../public/assets/styles-CFJOZt37.css"
	},
	"/assets/hero-RLlld_o6.jpg": {
		"type": "image/jpeg",
		"etag": "\"3aba8-hninsQDKZ4gyn5DRk2w/eVE5bU4\"",
		"mtime": "2026-07-24T15:09:39.293Z",
		"size": 240552,
		"path": "../public/assets/hero-RLlld_o6.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_M05hKL = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_M05hKL
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
