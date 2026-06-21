function flipCard() {
  /* =============================================
       BASE ELEMENTS
       ============================================= */
  // Retourne la carte et met à jour son libellé d'accessibilité.
  const card = document.getElementById("card");
  const isFlipped = card.classList.toggle("is-flipped");
  card.setAttribute(
    "aria-label",
    isFlipped ? "Retourner la carte (verso affiché)" : "Retourner la carte",
  );
}

document.addEventListener("DOMContentLoaded", function () {
  /* =============================================
       DOM ELEMENTS
       ============================================= */
  // Éléments principaux utilisés dans l'interface.
  const card = document.getElementById("card");
  const modal = document.getElementById("acc-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const modalClose = document.querySelector(".modal-close");

  /* =============================================
       ACCORDION
       ============================================= */
  // Affiche ou masque le bouton "plus" selon le contenu long disponible.
  function updateMoreBtn(item) {
    const body = item.querySelector(".acc-body");
    const btn = item.querySelector(".acc-more-btn");
    if (!btn || !body) return;
    btn.style.display = body.dataset.long ? "inline-flex" : "none";
  }

  // Permet de retourner la carte au clic, sauf sur certains éléments interactifs.
  card.addEventListener("click", function (e) {
    if (
      e.target.closest("a") ||
      e.target.closest(".card-footer") ||
      e.target.closest(".skill-tabs") ||
      e.target.closest(".skill-pagination") ||
      e.target.closest(".accordion-toggle") ||
      e.target.closest(".acc-more-btn") ||
      e.target.closest(".sec-toggle")
    )
      return;
    flipCard();
  });

  // Permet aussi de retourner la carte au clavier avec Entrée ou Espace.
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      flipCard();
    }
  });

  // Gestion de l'accordéon : un seul bloc ouvert à la fois sur toute la page.
  const allAccItems = document.querySelectorAll(".acc-item");

  // Ouvre ou ferme un item d'accordéon.
  document.querySelectorAll(".accordion-toggle").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const item = btn.closest(".acc-item");
      const body = item.querySelector(".acc-body");
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      // Ferme tous les autres items avant d'ouvrir celui-ci.
      if (!isExpanded) {
        allAccItems.forEach(function (other) {
          if (other !== item) {
            other.querySelector(".acc-body").classList.add("hidden");
            const otherBtn = other.querySelector(".accordion-toggle");
            otherBtn.setAttribute("aria-expanded", "false");
            otherBtn.textContent = "+";
            const otherMore = other.querySelector(".acc-more-btn");
            if (otherMore) otherMore.style.display = "none";
          }
        });
      }

      body.classList.toggle("hidden", isExpanded);
      btn.setAttribute("aria-expanded", isExpanded ? "false" : "true");
      btn.textContent = isExpanded ? "+" : "−";

      if (!isExpanded) {
        updateMoreBtn(item);
      } else {
        const moreBtn = item.querySelector(".acc-more-btn");
        if (moreBtn) moreBtn.style.display = "none";
      }
    });
  });

  /* =============================================
         MOBILE SECTIONS
         ============================================= */
  // Gestion des sections repliables sur mobile.
  document.querySelectorAll(".sec-toggle").forEach(function (btn) {
    const list = document.getElementById(btn.getAttribute("aria-controls"));
    if (!list) return;
    list.style.transitionDuration = "0s";
    list.classList.add("sec-collapsed");
    requestAnimationFrame(function () {
      list.style.transitionDuration = "";
    });

    // Ouvre ou replie une section.
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      list.classList.toggle("sec-collapsed", isExpanded);
      btn.setAttribute("aria-expanded", isExpanded ? "false" : "true");
      btn.setAttribute(
        "aria-label",
        isExpanded ? "Afficher la section" : "Masquer la section",
      );

      // Ferme les accordéons ouverts quand la section est repliée.
      if (isExpanded) {
        list
          .querySelectorAll(".acc-body:not(.hidden)")
          .forEach(function (body) {
            body.classList.add("hidden");
            const toggle = body
              .closest(".acc-item")
              .querySelector(".accordion-toggle");
            if (toggle) {
              toggle.setAttribute("aria-expanded", "false");
              toggle.textContent = "+";
            }
            const moreBtn = body
              .closest(".acc-item")
              .querySelector(".acc-more-btn");
            if (moreBtn) moreBtn.style.display = "none";
          });
      }
    });
  });

  /* =============================================
         MODAL
         ============================================= */
  // Ouvre la fenêtre modale avec le contenu détaillé d'un item.
  document.querySelectorAll(".acc-more-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const item = btn.closest(".acc-item");
      const body = item.querySelector(".acc-body");
      const title = item.querySelector(".acc-title");
      modalTitle.textContent = title ? title.textContent.trim() : "";
      modalText.textContent = body.dataset.long || body.textContent.trim();
      modal.showModal();
    });
  });

  modalClose.addEventListener("click", function () {
    modal.close();
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.close();
  });

  /* =============================================
         SKILLS FILTERS & PAGINATION
         ============================================= */
  // Gestion des filtres et de la pagination des compétences.
  const tabs = document.querySelectorAll(".skill-tab");
  const tagItems = Array.from(document.querySelectorAll(".tag-list li"));
  const pagination = document.querySelector(".skill-pagination");
  const pageInfo = document.querySelector(".skill-page-info");
  const btnPrev = document.querySelector(".skill-prev");
  const btnNext = document.querySelector(".skill-next");

  // Nombre d'éléments affichés par page pour certains filtres.
  const PAGE_SIZE = { outils: 6 };
  let currentFilter = "front";
  let currentPage = 1;

  // Récupère les éléments correspondant au filtre sélectionné.
  function getFiltered(filter) {
    return tagItems.filter((item) => item.dataset.cat === filter);
  }

  // Applique le filtre et met à jour l'affichage des pages.
  function applyFilter(filter, page) {
    currentFilter = filter;
    currentPage = page || 1;

    const filtered = getFiltered(filter);
    const pageSize = PAGE_SIZE[filter] || filtered.length;
    const totalPages = Math.ceil(filtered.length / pageSize);
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    tagItems.forEach((item) => {
      item.style.display = "none";
    });
    filtered.slice(start, end).forEach((item) => {
      item.style.display = "";
    });

    if (totalPages > 1) {
      pagination.style.display = "flex";
      pageInfo.textContent = currentPage + " / " + totalPages;
      btnPrev.disabled = currentPage === 1;
      btnNext.disabled = currentPage === totalPages;
    } else {
      pagination.style.display = "none";
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      applyFilter(tab.dataset.filter, 1);
    });
  });

  btnPrev.addEventListener("click", () =>
    applyFilter(currentFilter, currentPage - 1),
  );
  btnNext.addEventListener("click", () =>
    applyFilter(currentFilter, currentPage + 1),
  );

  applyFilter("front", 1);
});
