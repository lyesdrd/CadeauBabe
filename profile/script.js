document.addEventListener('DOMContentLoaded', function () {
    const photosContainer = document.getElementById('photosContainer');

    // Array of photo URLs
    const photoUrls = [
        'photos/20221231_162506.jpg',
        'photos/20230630_112318.jpg',
        'photos/20230704_220350.jpg',
        'photos/mmexport1683979845046.jpg',
        'photos/20230305_125108.jpg',
        'photos/20230630_082855.jpg',
        'photos/20230406_173606.jpg',
        'photos/20230513_082635.jpg',
        'photos/20230704_184411.jpg',
        'photos/20230630_164149.jpg',
        'photos/20230630_164128.jpg',
        'photos/20230630_164140.jpg',
        'photos/20230311_142635.jpg',
        'photos/20230630_150118.jpg',
        'photos/20230630_180941.jpg',
        'photos/20230408_230726.jpg',
        'photos/20230408_100642.jpg',
        'photos/20230408_151143.jpg',
        'photos/20230705_185312.jpg',
        'photos/20230630_151850.jpg',
        'photos/20230701_170802.jpg',
        'photos/20230705_185338.jpg',
        'photos/20230630_152927.jpg',
        'photos/20230701_171337.jpg',
        'photos/20230814_102941.jpg',
        'photos/20230407_105117.jpg',
        'photos/20230514_192809.jpg',
        'photos/20230815_184915.jpg',
        'photos/20230407_120618.jpg',
        'photos/20230704_200951.jpg',
        'photos/20230816_101518.jpg',

    ];

    // Function to display photos
    function displayPhotos() {
        photoUrls.forEach(function (url) {
            const img = document.createElement('img');
            img.src = url;
            img.classList.add('relative');
            photosContainer.appendChild(img);
        });
    }

    // Call the function to display photos
    displayPhotos();
});
