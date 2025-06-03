$(function() {
  // Chargement des services
  $.getJSON('data/services.json', function(data) {
    let html = '';
    data.forEach(service => {
      html += `<div class="col-md-6 mb-4"><div class="card h-100 shadow-sm"><div class="card-body"><h5 class="card-title">${service.title}</h5><p class="card-text">${service.description}</p></div></div></div>`;
    });
    $('#services-list').html(html);
  });

  // Chargement de la section À propos
  $.getJSON('data/about.json', function(data) {
    let html = `<h4>Mission</h4><p>${data.mission}</p><h4>Vision</h4><p>${data.vision}</p><h4>Équipe</h4><ul>`;
    data.team.forEach(member => {
      html += `<li><strong>${member.name}</strong> (${member.role}) : ${member.bio}</li>`;
    });
    html += '</ul>';
    $('#about-content').html(html);
  });

  // Chargement des témoignages
  $.getJSON('data/testimonials.json', function(data) {
    let html = '';
    data.forEach(t => {
      html += `<div class="col-md-6 mb-4"><div class="card h-100"><div class="card-body"><blockquote class="blockquote mb-0"><p>${t.content}</p><footer class="blockquote-footer">${t.author}</footer></blockquote></div></div></div>`;
    });
    $('#testimonials-list').html(html);
  });

  // Chargement des actualités
  $.getJSON('data/news.json', function(data) {
    let html = '';
    data.forEach(n => {
      html += `<div class="col-md-6 mb-4"><div class="card h-100"><div class="card-body"><h5 class="card-title">${n.title}</h5><h6 class="card-subtitle mb-2 text-muted">${n.date}</h6><p class="card-text">${n.content}</p></div></div></div>`;
    });
    $('#news-list').html(html);
  });
});