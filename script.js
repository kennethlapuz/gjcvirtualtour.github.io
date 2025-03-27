const locations = {
    "Entrance Gate": "scene1",
    "Facade": "scene2"
};

document.querySelector(".search-bar").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    let searchQuery = document.querySelector(".search-bar input").value.trim();
    
    if (locations[searchQuery]) {
        viewer.loadScene(locations[searchQuery]); // Load the scene if found
    } else {
        alert("Location not found!");
    }
});


// Function to create a custom ground hotspot (Google Street View style)
function groundHotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add("ground-hotspot"); // Apply CSS class
    hotSpotDiv.style.backgroundImage = "url('images/arrow-icon2.png')"; // Use an arrow icon
    hotSpotDiv.style.width = "10px"; // Adjust width
    hotSpotDiv.style.height = "10px"; // Adjust height
}

// Initialize Pannellum Viewer with Two Scenes
pannellum.viewer('panorama', {
    "default": {
        "firstScene": "scene1",
        "sceneFadeDuration": 1000,
        "hfov": 100,  // Default zoom level
        "autoLoad": true,  // ✅ Auto-load panorama on page load
        "showFullscreenCtrl": false  // ✅ Hide fullscreen button
    },
    "scenes": {
        "scene1": {
            "type": "equirectangular",
            "panorama": "images/entrance-gate.jpg",
            "hfov": 115,  
            "hotSpots": [
                {
                    "pitch": -33,  
                    "yaw": -3,     
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "scene2"
                }
            ]
        },
        "scene2": {
            "type": "equirectangular",
            "panorama": "images/facade.jpg",
            "hfov": 110,  
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "scene1"
                }
            ]
        }
    }
});
