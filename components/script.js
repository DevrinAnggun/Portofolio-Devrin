document.addEventListener('DOMContentLoaded', () => {
    fetch('https://my-database-api.com/portfolios')
        .then(response => response.json())
        .then(data => {
            const portfolioList = document.getElementById('portfolio-list');
            data.forEach(item => {
                const portfolioItem = document.createElement('div');
                portfolioItem.classList.add('portfolio-item');
                portfolioItem.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
                portfolioList.appendChild(portfolioItem);
            });
        })
        .catch(error => console.error('Error fetching portfolio data:', error));
});
