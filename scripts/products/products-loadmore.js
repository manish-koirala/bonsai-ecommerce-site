// A script which loads more product content when clicked on the load more button.

var moreContent= document.getElementById('more-content');
var loadMoreButton = document.getElementById('load-more-button');
loadMoreButton.addEventListener('click', loadMoreContent);


/* When clicked on the load-more button, this function is triggered.
- After Clicking the button removes or adds the hidden class from the two initially hidden containers,
which makes them appear or disappear.
- Also, the text changes to "Load less" or "Load More" based on whether the two initially hidden 
containers are hidden or not.
*/

function loadMoreContent() {
    if (moreContent.classList.contains("hidden")) {
        moreContent.classList.remove('hidden');
        loadMoreButton.innerText = "Load less";
    }
    else {
        moreContent.classList.add('hidden');
        loadMoreButton.innerText = "Load More";
    }
}