// button_logic.js
//************* write the data pushing from the inputbox
/// to the arrays
var words = [];
var pulledajaxdata =[];
$(".testbutton").click(function(event){
    inputboxval = $(".textinputbox").val();
    console.log("button clicked", inputboxval);
    addtowords(inputboxval);
    update(words);
});

//adds words to the words array and pops automatically if the ammounts are more than 5
function addtowords(word){
  if(words.length === 5){
    words.shift();
  }
  words.push(word);
}



//make the ajax call when the button is pressed
    $(".refreshAjax").click(function(){
        $.ajax({
          type: "GET",
          crossDomain: false,
          url: "/api/getsearch",
           //context: document.body
          }).done(function(data){
              givemedata = data;
              console.log("ajax data is:")
              console.log(data);

           });


        });

//fullauto mode pulling from api
  $(".fullAuto").click(runFullprogram); // runFullprogram is taken out because  .click needs to be reinstatiated
//function to run the full program,
function runFullprogram(){
    $(this).off(); //turn off event listener
    $.ajax({
      type: "GET",
      crossDomain: false,
      url: "/api/getsearch",
           //context: document.body
      }).done(function(data){
              givemedata = data;
              pulledajaxdata = data;
              console.log("ajax data is:");
              console.log(pulledajaxdata);
              console.log("data is:");
              console.log(data);
              $(this).click(runFullprogram);
           });



        var i =-1;

var runinterval = setInterval(function(){
  if(pulledajaxdata.length != i-1){
        i++;
        console.log(i);
        var currentword = pulledajaxdata[i];
          addtowords(currentword);
            update(words);
            console.log("current word " +currentword);
            console.log("index of pulledajaxdata "+i);
          }else{clearInterval(runinterval)
          }
        }, 3000);

    }

// var myInterval = setInterval(function () {
//     alert(1);
//     clearInterval(myInterval);
// }, 2000);





var $inputboxval = "";
var listvizArray =words; //data for the list visualization
var cloudvizArray=["cloudvizArray0 fine","cloudvizArray1 ok","cloudvizArray2 ok"]; // data for the text cloud vix
var pievizArray=["pivevizArray"];   //data for the pie (thats not here yet)
//var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabet = listvizArray; //making the alphabet array the input array
var counter = 0;




  textboxcolor = d3.rgb("#ffffff");

d3.select("svgText").style("background-color",textboxcolor)

var svgText = d3.select("#listvizdiv").append("svgText")
    .attr("width", 960)
    .attr("height", 500)
    .append("g")
    .attr("transform", "translate(32," + (500 / 2) + ")");

function update(data) {

  // DATA JOIN
  // Join new data with old elements, if any.
  var text = svgText.selectAll("text")
      .data(data);

  // UPDATE
  // Update old elements as needed.
  text.attr("class", "update");

  // ENTER
  // Create new elements as needed.
  text.enter().append("text")
      .attr("class", "enter")
      .attr("x", function(d, i) { return i * 32; })
      .attr("dy", ".35em");

  // ENTER + UPDATE
  // Appending to the enter selection expands the update selection to include
  // entering elements; so, operations on the update selection after appending to
  // the enter selection will apply to both entering and updating nodes.
  text.text(function(d) { return d; });

  // EXIT
  // Remove old elements as needed.
  text.exit().remove();
}

// The initial display.

// Grab a random sample of letters from the alphabet, in alphabetical order.
// setInterval(function() {
//   update(d3.shuffle(alphabet)
//       .slice(0, Math.floor(Math.random() * 26))
//       .sort());
// }, 1500);




//Simple animated example of d3-cloud - https://github.com/jasondavies/d3-cloud
//Based on https://github.com/jasondavies/d3-cloud/blob/master/examples/simple.html

// Encapsulate the word cloud functionality
function wordCloud(selector) {
  cloudbackcolor = d3.rgb("#ff0000");
d3.select(selector).style("background-color", cloudbackcolor)
    var fill = d3.scale.category20();

    //Construct the word cloud's SVG element
    var svg = d3.select(selector).append("svg")
        .attr("width", 500)
        .attr("height", 500)
        .append("g")
        .attr("transform", "translate(250,250)");


    //Draw the word cloud
    function draw(words) {
        var cloud = svg.selectAll("g text")
                        .data(words, function(d) { return d.text; })

        //Entering words
        cloud.enter()
            .append("text")
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr('font-size', 1)
            .text(function(d) { return d.text; });

        //Entering and existing words
        cloud
            .transition()
                .duration(600)
                .style("font-size", function(d) { return d.size + "px"; })
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .style("fill-opacity", 1);

        //Exiting words
        cloud.exit()
            .transition()
                .duration(200)
                .style('fill-opacity', 1e-6)
                .attr('font-size', 1)
                .remove();
    }


    //Use the module pattern to encapsulate the visualisation code. We'll
    // expose only the parts that need to be public.
    return {

        //Recompute the word cloud for a new set of words. This method will
        // asycnhronously call draw when the layout has been computed.
        //The outside world will need to call this function, so make it part
        // of the wordCloud return value.
        update: function(words) {
            d3.layout.cloud().size([500, 500])
                .words(words)
                .padding(5)
                .rotate(function() { return ~~(Math.random() * 2) * 90; })
                .font("Impact")
                .fontSize(function(d) { return d.size; })
                .on("end", draw)
                .start();
        }
    }

}
//****** original words
//Some sample data - http://en.wikiquote.org/wiki/Opening_lines
// var words = [
//   "You don't know about me without you have read a book called The Adventures of Tom Sawyer but that ain't no matter.",
//   "The boy with fair hair lowered himself down the last few feet of rock and began to pick his way toward the lagoon.",
//   "When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton.",
//   "It was inevitable: the scent of bitter almonds always reminded him of the fate of unrequited love."
// ]
// var words = cloudvizArray
//Prepare one of the sample sentences by removing punctuation,
// creating an array of words and computing a random size attribute.
function getWords() {
    return words
            .join(' ')
            .replace(/[!\.,:;\?]/g, '')
            .split(' ')
            .map(function(d) {
                return {text: d, size: 10 + Math.random() * 60};
            })
}



//This method tells the word cloud to redraw with a new set of words.
//In reality the new words would probably come from a server request,
// user input or some other source.
function showNewWords(vis, i) {
    i = i || 0;

    vis.update(getWords())
     setTimeout(function() {
     showNewWords(vis, i + 1)
     }, 1000)  //this is the timer function to rerun the update
}

//Create a new instance of the word cloud visualisation.
var myWordCloud = wordCloud('body');

//Start cycling through the demo data
showNewWords(myWordCloud); // this runs the whole update



