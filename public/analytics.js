(function () {
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

  function track(name, props) {
    var evt = { event: name, payload: props };

    if (name === "affiliate_click") {
      var slug = props.source_slug || pageMeta().page_slug;
      gc("/event/affiliate_click/" + slug, "affiliate_click: " + (props.cta_name || slug));
    } else {
      gc("/event/" + name, name);
    }

    if (window.localStorage && window.localStorage.getItem("bellatoria_debug") === "1") {
      console.log("[bellatoria:track]", evt);
    }
    window.dispatchEvent(new CustomEvent("bellatoria:track", { detail: evt }));
  }

  document.addEventListener("DOMContentLoaded", function () {
    track("page_view", pageMeta());
  });

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
