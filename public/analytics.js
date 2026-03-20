(function () {
  var DEBUG_KEY = "bellatoria_debug";

  function pageMeta() {
    var b = document.body;
    return {
      page_slug: b.dataset.pageSlug || "unknown",
      section: b.dataset.section || "unknown",
      page_type: b.dataset.pageType || "unknown",
    };
  }

  function gc(path, title) {
    if (window.goatcounter && typeof window.goatcounter.count === "function") {
      window.goatcounter.count({ path: path, title: title, event: true });
    }
  }

  function debugEnabled() {
    try {
      return window.localStorage && window.localStorage.getItem(DEBUG_KEY) === "1";
    } catch (_) {
      return false;
    }
  }

  function track(name, props) {
    var evt = { event: name, payload: props };
    var slug = props.source_slug || pageMeta().page_slug;
    var label = props.cta_name || props.target_slug || slug;
    gc("/event/" + name + "/" + slug, name + ": " + label);
    if (debugEnabled()) {
      console.log("[bellatoria:track]", evt);
    }
    window.dispatchEvent(new CustomEvent("bellatoria:track", { detail: evt }));
  }

  document.addEventListener("click", function (event) {
    var el = event.target.closest("[data-track]");
    if (!el) return;
    var page = pageMeta();
    track(el.dataset.track, {
      source_slug: page.page_slug,
      section: page.section,
      page_type: page.page_type,
      target_slug: el.dataset.targetSlug || "",
      block_name: el.dataset.blockName || "",
      cta_name: el.dataset.ctaName || "",
      partner: el.dataset.partner || "",
      destination_type: el.dataset.destinationType || "",
    });
  });
})();
