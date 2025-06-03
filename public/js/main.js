$(function() {
  // Chargement des services
  $.getJSON('data/services.json', function(data) {
    let html = '';
    data.forEach(service => {
      html += `
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm border-0 service-card" data-title="${service.title}" data-content='${service.details.replace(/'/g,"&#39;")}'>
            <div class="card-body">
              <div class="icon-gold mb-3"><i class="bi bi-lightbulb"></i></div>
              <h5 class="card-title">${service.title}</h5>
              <p class="card-text">${service.description}</p>
              <a href="#" class="btn btn-link text-gold p-0 voir-details">Voir détails <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      `;
    });
    $('#services-list').html(html);
  });

  // Chargement de la section À propos
  $.getJSON('data/about.json', function(data) {
    // Mission et vision
    $('#about-mission').text(data.mission);
    $('#about-vision').text(data.vision);

    // Image principale
    $('.about-main-img').attr('src', data.image);

    // Équipe
    let teamHtml = '';
    data.team.forEach(member => {
      teamHtml += `
        <div class="col-6 col-md-3 mb-4">
          <div class="card border-0 shadow-sm h-100 text-center">
            <img src="${member.photo}" alt="${member.name}" class="card-img-top rounded-circle mx-auto mt-3" style="width:100px; height:100px; object-fit:cover;">
            <div class="card-body">
              <h5 class="card-title mb-1">${member.name}</h5>
              <div class="text-gold small mb-1">${member.role}</div>
              <p class="card-text small">${member.bio}</p>
            </div>
          </div>
        </div>
      `;
    });
    $('#about-team').html(teamHtml);
  });

  // Chargement des témoignages
  $.getJSON('data/testimonials.json', function(data) {
    let html = '';
    data.forEach(t => {
      html += `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card h-100 shadow-sm border-0 testimonial-card">
            <div class="card-body d-flex flex-column align-items-center text-center">
              <img src="${t.image}" alt="${t.author}" class="rounded-circle mb-3 testimonial-img" width="80" height="80" style="object-fit:cover;">
              <blockquote class="blockquote mb-2">
                <p class="mb-0">${t.content}</p>
              </blockquote>
              <footer class="blockquote-footer mt-2 text-gold">${t.author}</footer>
            </div>
          </div>
        </div>
      `;
    });
    $('#testimonials-list').html(html);
  });

  // Chargement des actualités
  $.getJSON('data/news.json', function(data) {
    let html = '';
    data.forEach(n => {
      // Miniature dans la liste
      html += `
        <div class="col-md-6 mb-4">
          <div class="card h-100 shadow-sm border-0 news-card"
               data-title="${n.title}"
               data-content='${n.details.replace(/'/g,"&#39;")}'
               data-image="${n.image}">
            <img src="${n.image}" class="card-img-top news-thumb" alt="${n.title}">
            <div class="card-body">
              <h5 class="card-title">${n.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${n.date}</h6>
              <p class="card-text">${n.content}</p>
              <a href="#" class="btn btn-link text-gold p-0 voir-details">En savoir plus <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      `;
    });
    $('#news-list').html(html);
  });

  // Activation du menu selon la section visible
  $('a.nav-link').on('click', function() {
    $('a.nav-link').removeClass('active');
    $(this).addClass('active');
  });

  // Gestion du formulaire de contact
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    // Affiche un message de succès (à remplacer par un vrai envoi)
    alert('Merci pour votre message ! Nous vous répondrons rapidement.');
    this.reset();
  });

  // Gestion des modals pour services et actualités
  $(document).on('click', '.voir-details', function(e) {
    e.preventDefault();
    const parent = $(this).closest('.service-card, .news-card');
    const title = parent.data('title');
    const content = parent.data('content');
    const image = parent.data('image');
    let modalContent = '';
    if (image) {
      modalContent += `<img src="${image}" alt="${title}" class="img-fluid rounded mb-3 w-100 modal-news-img">`;
    }
    modalContent += content;
    $('#detailsModalLabel').text(title);
    $('#detailsModalBody').html(modalContent);
    const modal = new bootstrap.Modal(document.getElementById('detailsModal'));
    modal.show();
  });
});