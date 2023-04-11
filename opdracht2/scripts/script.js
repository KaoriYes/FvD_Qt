const allListItems = ['MmE', 'LiP', 'AmL', 'FB', 'Igor', 'OD', 'LoP', 'VV', 'WN', 'AQS', 'Currents', 'DL', 'GG', 'Promise', 'MsS', 'MTC', 'S2S'];
var listItemsAll = ['MmE', 'LiP', 'AmL', 'FB', 'Igor', 'OD', 'LoP', 'VV', 'WN', 'AQS', 'Currents', 'DL', 'GG', 'Promise', 'MsS', 'MTC', 'S2S'];
const listItemsRap = ['MmE', 'LiP', 'FB', 'Igor', 'OD', 'LoP', 'VV'];
const listItemsElectronic = ['AmL', 'WN', 'AQS', 'Currents', 'MsS'];
const listItemsSJ = ['GG', 'Promise', 'DL', 'MTC', 'S2S'];
// Filter for rap genre
const filteredRap = allListItems.filter(item => listItemsRap.includes(item));


// Filter for electronic genre
const filteredElectronic = allListItems.filter(item => listItemsElectronic.includes(item));


// Filter for SJ genre
const filteredSJ = allListItems.filter(item => listItemsSJ.includes(item));

filterStatus = 0;




function filter() {
  listItemsAll = [];
  console.log('Filter All');
  if (filterStatus === 0) {
    listItemsAll = ['MmE', 'LiP', 'AmL', 'FB', 'Igor', 'OD', 'LoP', 'VV', 'WN', 'AQS', 'Currents', 'DL', 'GG', 'Promise', 'MsS', 'MTC', 'S2S'];
    console.log(listItemsAll);
  } else if (filterStatus === 1) {
    listItemsAll = filteredRap;

    // Loop through the elements in filteredElectronic and add the class "displaynone"
    for (var i = 0; i < filteredElectronic.length; i++) {
      var element = document.querySelector('.' + filteredElectronic[i]);
      if (element) {
        element.classList.add('displaynone');
      }
    }

    // Loop through the elements in filteredSJ and add the class "displaynone"
    for (var i = 0; i < filteredSJ.length; i++) {
      var element = document.querySelector('.' + filteredSJ[i]);
      if (element) {
        element.classList.add('displaynone');
      }
    }
    start1();
    console.log(listItemsAll);
  } else if (filterStatus == 2) {
    listItemsAll = filteredElectronic;
    // Loop through the elements in filteredElectronic and add the class "displaynone"
    for (var i = 0; i < filteredRap.length; i++) {
      var element = document.querySelector('.' + filteredRap[i]);
      if (element) {
        element.classList.add('displaynone');
      }
    }

    // Loop through the elements in filteredSJ and add the class "displaynone"
    for (var i = 0; i < filteredSJ.length; i++) {
      var element = document.querySelector('.' + filteredSJ[i]);
      if (element) {
        element.classList.add('displaynone');
      }
    }
    start1();
    console.log(listItemsAll);
  } else if (filterStatus == 3) {
    listItemsAll = filteredSJ;

    for (var i = 0; i < filteredRap.length; i++) {
      var element = document.querySelector('.' + filteredRap[i]);
      if (element) {
        element.classList.add('displaynone');
      }
    }

    for (var i = 0; i < filteredElectronic.length; i++) {
      var element = document.querySelector('.' + filteredElectronic[i]);
      if (element) {
        element.classList.add('displaynone');
      }
    }

    start1()
    console.log(listItemsAll);
  }
};


function filterRap() {
  if (filterStatus == 1) {
    location.reload()
  } else {
    console.log('Filter Rap');
    filterStatus = 1;
    filter();
  }
};

function filterElectronic() {
  if (filterStatus == 2) {
    location.reload()
  } else {
    console.log('Filter Electronic');
    filterStatus = 2;
    filter();
  }
}

function filterSJ() {
  if (filterStatus == 3) {
    location.reload()
  } else {
    console.log('Filter SJ');
    filterStatus = 3;
    filter();
  }
};
const filterRapBtn = document.querySelector('.filterRap');
const filterElectronicBtn = document.querySelector('.filterElectronic');
const filterSJBtn = document.querySelector('.filterSJ');
const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
var slicestatus = 0;
var scliceEnd = slicestatus + 5;
var totalSlice = listItemsAll.slice(slicestatus, scliceEnd);
var audioElement;
var audioUrl;
var playbtn;

function next1() {
  var scliceEnd = slicestatus + 4;

  console.log(listItemsAll);
  var totalSlice = listItemsAll.slice(slicestatus, scliceEnd);
  var slice0 = document.querySelector(`.${totalSlice[0]}`);

  slice0.classList.remove('left-album');
  slice0.classList.add('downstairs');
  setTimeout(function () {
    slice0.classList.add('displaynone');
  }, 350);
  slicestatus++;

  setTimeout(function () {
    playAlbum();
    var totalSlice = listItemsAll.slice(slicestatus, scliceEnd);
    var slice0 = document.querySelector(`.${totalSlice[0]}`);
    var slice1 = document.querySelector(`.${totalSlice[1]}`);
    var slice2 = document.querySelector(`.${totalSlice[2]}`);

    slice0.classList.add('left-album');
    slice0.classList.remove('middle-album');
    slice1.classList.add('middle-album');
    slice1.classList.remove('right-album');
    slice2.classList.remove('displaynone');

    setTimeout(function () {
      slice2.classList.add('right-album');
      slice2.classList.remove('upstairs');

    }, 350);

  }, 2);

  buttoncheck();

};

function prev1() {
  slicestatus--;
  setTimeout(function () {
    playAlbum();
  }, 2);
  var scliceEnd = slicestatus + 4;
  var totalSlice = listItemsAll.slice(slicestatus, scliceEnd);


  var slice0 = document.querySelector(`.${totalSlice[0]}`);
  var slice1 = document.querySelector(`.${totalSlice[1]}`);
  var slice2 = document.querySelector(`.${totalSlice[2]}`);
  var slice3 = document.querySelector(`.${totalSlice[3]}`);

  slice1.classList.remove('left-album');
  slice1.classList.add('middle-album');
  slice2.classList.remove('middle-album');
  slice2.classList.add('right-album');

  slice3.classList.add('upstairs');
  slice3.classList.remove('right-album');
  setTimeout(function () {
    slice3.classList.add('displaynone');
  }, 350);

  slice0.classList.remove('displaynone');
  setTimeout(function () {
    slice0.classList.remove('downstairs');
    slice0.classList.add('left-album');
  }, 350);

  buttoncheck();

}

function start1() {
  playAlbum();
  var totalSlice = listItemsAll.slice(slicestatus, scliceEnd);
  var slice0 = document.querySelector(`.${totalSlice[0]}`);
  var slice1 = document.querySelector(`.${totalSlice[1]}`);
  var slice2 = document.querySelector(`.${totalSlice[2]}`);
  slice0.classList.add('left-album');
  slice0.classList.remove('middle-album');
  slice0.classList.remove('right-album');
  slice0.classList.remove('upstairs');
  slice0.classList.remove('downstairs');
  slice0.classList.remove('displaynone');

  slice1.classList.remove('left-album');
  slice1.classList.add('middle-album');
  slice1.classList.remove('right-album');
  slice1.classList.remove('upstairs');
  slice1.classList.remove('downstairs');
  slice1.classList.remove('displaynone');

  slice2.classList.remove('left-album');
  slice2.classList.remove('middle-album');
  slice2.classList.add('right-album');
  slice2.classList.remove('upstairs');
  slice2.classList.remove('downstairs');
  slice2.classList.remove('displaynone');

};

function buttoncheck() {
  console.log(slicestatus);

  if (slicestatus == 0) {
    prevButton.classList.add('displaynone');
  } else if (slicestatus != 0) {
    prevButton.classList.remove('displaynone');
  }
  if (slicestatus != listItemsAll.length - 3) {
    nextButton.classList.remove('displaynone');
  } else if (slicestatus == listItemsAll.length - 3) {
    nextButton.classList.add('displaynone');
  }
};

function playAlbum() {
  var playbtn = document.querySelector(`.playbtn${listItemsAll[slicestatus + 1]}`);
  var audioElement = new Audio();
  var audioUrl = `/opdracht2/audio/${listItemsAll[slicestatus + 1]}.mp3`;
  console.log(audioUrl);

  function playRandomSlice() {
    if (audioElement.paused) {
      fetch(audioUrl)
        .then(response => response.arrayBuffer())
        .then(buffer => {
          var slicedBuffer = sliceBuffer(buffer);
          var blob = new Blob([slicedBuffer]); // Binary Large Object
          var slicedUrl = URL.createObjectURL(blob); // create a url from the blob
          audioElement.src = slicedUrl;
          audioElement.play(); // Play if paused
          playbtn.innerHTML = 'Pause';
        })
        .catch(error => console.error(error));
    } else {
      audioElement.pause(); // Pause if playing
      playbtn.innerHTML = 'Play';
    }
  }

  function sliceBuffer(buffer) {
    var duration = 5; // duration of the random slice in seconds
    var sampleRate = 44100; // sample rate of the audio file
    var start = Math.random() * (buffer.byteLength - duration * sampleRate * 2);
    var end = start + duration * sampleRate * 2;
    return buffer.slice(start, end);
  }
  playbtn.addEventListener('click', playRandomSlice);
}





document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '38') {
    // up arrow
  } else if (e.keyCode == '40') {
    // down arrow
  } else if (e.keyCode == '37') {
    // left arrow
    if (slicestatus > 0) {
      prev1();
    }
  } else if (e.keyCode == '39') {
    // right arrow
    if (slicestatus < listItemsAll.length - 3) {
      next1();
    }
  }
};

filter();


buttoncheck();
playAlbum();
nextButton.addEventListener('click', next1);
prevButton.addEventListener('click', prev1);
filterRapBtn.addEventListener('click', filterRap);
filterElectronicBtn.addEventListener('click', filterElectronic);
filterSJBtn.addEventListener('click', filterSJ);



// if (window.matchMedia('(max-width: 800px)').matches) {
//   console.log('mobile');
//   document.getElementById('menu').addEventListener('click', function (event) {
//     var playbtn1 = event.target;
//     if (playbtn1.classList.contains('playbtn')) {
//       // Traverse up the DOM tree to find the parent LI element
//       var listItem = playbtn1.closest('li');

//       // Extract the selected index based on the index of the parent LI element among its siblings
//       var selectedIndex = Array.from(listItem.parentElement.children).indexOf(listItem);
//       console.log(selectedIndex);
//       if (isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= allListItems.length) {
//         console.error('Invalid selectedIndex');
//         return;
//       }

//       var audioElement = new Audio();
//       var audioUrl = `/opdracht2/audio/${allListItems[selectedIndex]}.mp3`;
//       console.log(audioUrl);

//       function playRandomSlice() {
//         if (audioElement.paused === false) {
//           console.log("pause is " + audioElement.paused);
//           audioElement.pause(); // Pause if playing
//           playbtn1.innerHTML = 'Play';
//         } else if (audioElement.paused === true) {
//           console.log("pause is " + audioElement.paused);
//           fetch(audioUrl)
//             .then(response => response.arrayBuffer())
//             .then(buffer => {
//               var slicedBuffer = sliceBuffer(buffer);
//               var blob = new Blob([slicedBuffer]); // Binary Large Object
//               var slicedUrl = URL.createObjectURL(blob); // create a URL from the blob
//               audioElement.src = slicedUrl;
//               audioElement.play(); // Play if paused
//               playbtn1.innerHTML = 'Pause';
//             })
//             .catch(error => console.error(error));
//         }
//       }



//       function sliceBuffer(buffer) {
//         var duration = 5; // duration of the random slice in seconds
//         var sampleRate = 44100; // sample rate of the audio file
//         var start = Math.random() * (buffer.byteLength - duration * sampleRate * 2);
//         var end = start + duration * sampleRate * 2;
//         return buffer.slice(start, end);
//       }

//     playRandomSlice();
//     }
//   });
// }

