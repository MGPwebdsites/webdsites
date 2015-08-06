/***********************************************************************************
//////////////////////////////////Students enrolled/////////////////////////////
***********************************************************************************/
var students = [ 
  {
   name: 'Math',
   Track: 'IOS',
   achievements: 'Gold batch',
   points: 1945
  },
  {
   name: 'Math',
   Track: 'AJAX',
   achievements: 'Gold batch',
   points: 1945
  },
  {name: 'Martin', Track: 'Java', achievements: 'Bronze batch', points: 195},
  {name: 'Nixon', Track: 'PHP', achievements: 'Silver batch', points: 1445},
  {name: 'Cesar', Track: 'Web Design', achievements: 'Gold batch', points: 2923},
  {name: 'Jeniffer', Track: 'Front web development', achievements: 'Silver batch', points: 1885}
];
/***********************************************************************************
//////////////////////////////////Location for Messages/////////////////////////////
***********************************************************************************/

function print(message) {
var outputDIV = document.getElementById('output');
  outputDIV.innerHTML = message;
};

/***********************************************************************************
///////////////////////////////////Student info organization////////////////////////
***********************************************************************************/


function studentInfo (objarr) {
  for( var i = 0 ; i < students.length ; i++) {  
  HTMLinfo = '';
  HTMLinfo +=  '<h2>Name: ' + objarr.name + '</h2><br>';
  HTMLinfo +=  '<p>Track: ' + objarr.Track + '<br>';
  HTMLinfo +=  '<p>Achievements: ' + objarr.achievements +   '<br>';
  HTMLinfo +=  '<p>Points: ' + objarr.points ;

  } 
  
return HTMLinfo;  
};


/***********************************************************************************
////////////////////////////////////Students vars/////////////////////////////////
***********************************************************************************/

var studentSearch;
var message = '';// Set to '' to avoid undefined message.
var found = false;// Nothing has being found yet
var listLoops;// separate counter to count loop above for loop counter.

/***********************************************************************************
////////////////////////////////////Students Search/////////////////////////////////
***********************************************************************************/

while (true) {
studentSearch = prompt('Enter the name of the Student you wish to search for, type LIST to see the students enrolled, CLEAR to erase list, SEE for full view and QUIT to exit');
  
    if (  studentSearch.toLowerCase() === 'quit') {
                  print('<h2>Thank you for using our student search system<h2>'+
                        '<h2>Good Bye</h2>');
                  break;
    
    }else if (studentSearch === '' ||studentSearch === null ) {
                  print('Please enter a student name'); 
    }else if (studentSearch === 'see' ) {
                  alert('To go back to the search please refresh this page');
                  break; 
    }else if (studentSearch.toLowerCase() == 'clear') {
                  print('');//clears the div "output"
    } else {
      
/***********************************************************************************
////////////////////////////////////Name Search/////////////////////////////////
***********************************************************************************/      
                message = '<ol>'//set found names to an organize list
                for( var i = 0 ; i < students.length ; i++) {  
                student = students[i];
                      if(student.name.toLowerCase() === studentSearch.toLowerCase()) {
                          message += '<li>' + studentInfo (student) + '</li>';
                          var found = true;// changed global value of found
                      }
                }
/***********************************************************************************
////////////////////////////////list of students Search////////////////////////////
***********************************************************************************/      
                if (  studentSearch.toLowerCase() === 'list' && found === false) {
                message += 'Start of List<br><ol>';//organizing the list
                listLoops = 0; // 2 counter to match the end value of names
                      for( var i = 0 ; i < students.length ; i++) {  
                           student = students[i];
                           message += '<li>' + studentInfo (student)+'</li>';
                           print(message)
                           listLoops++;
                              if (listLoops === students.length){
                                message += '</ol><p>End of List</p><br>';
                                print(message)
                                message = '';//reset variable value at the end
                                break;
                              }
                        }
                }
/***********************************************************************************
////////////////////////////////if names are not found///////////////////////////
***********************************************************************************/       
                else if (found === false) {
                print('No student found by the name of: ' + studentSearch);
                }
/***********************************************************************************
///////////////////////////////////if names are found////////////////////////////
***********************************************************************************/                     else {
                print(message);
                message = '</ol>';//clossing the organized list for students
                var found = false;// reseting found to avoid repetition on search
                }
    }
}




