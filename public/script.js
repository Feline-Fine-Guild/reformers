document.addEventListener('DOMContentLoaded', () => {
    const pages = [
        `<h1>To Whomever it may Concern,</h1>
        <p>Our ways have failed us, and nature has as well... The surface is full of beasts and horrendous imperfections...</p>`,
        
        `<p>Not to mention the structures of our last of kin... Mother Nature is a monster.</p>
        <p>Our bodies litter the soil as we're merely pests and livestock to those above us in the chain of command.</p>`,

        `<p>So what is it we can do? We lack any power to hold back the forces, it's not like we can destroy them forever.</p>
        <p>The world is like this now... forever.</p>`,

        `<p>But we can start again! Begin from stage one, make a proper example of what the world should be!</p>
        <p>Free from those monsters that infest our fields, kill our pets, and destroy our homes.</p>`,

        `<p>We shall build a new world; A NEW EDEN! Right below the ocean! Where they can't get to us!</p>
        <p>Truly make a flawless world, starting again from stage one...</p>`,

        `<p>Join the Reformers today and make the world you want your kids to be safe in...</p>
        <p>Under the ocean blue.</p>`
    ];

    let currentPage = 0;

    const bookText = document.querySelector('.book-text');
    const backButton = document.querySelector('.back-button');
    const nextButton = document.querySelector('.next-button');

    function updatePage() {
        bookText.innerHTML = pages[currentPage];

        backButton.style.visibility = currentPage === 0 ? 'hidden' : 'visible';
        nextButton.style.visibility = currentPage === pages.length - 1 ? 'hidden' : 'visible';
    }

    backButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updatePage();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePage();
        }
    });

    updatePage(); // Initialize first page
});
