/**
 * My solution to https://www.interviewcake.com/question/javascript/merging-ranges
 * I think my solution is better than theirs.
 *  
 */


function mergeRanges(meetings) {

    meetings.sort((a, b) => b.startTime - a.startTime);
    let meeting = meetings.pop();
    return recurse(meetings, meeting);
  }
  
  function recurse(meetings, meeting) {
    
    if (meetings.length === 0) {
      return [meeting];
    }
    
    let nextMeeting = meetings.pop();
    
    if (nextMeeting.startTime >= meeting.startTime && nextMeeting.endTime <= meeting.endTime) {
      return [].concat(recurse(meetings, meeting));
    }
    
    if (nextMeeting.startTime <= meeting.endTime) {
      meeting = {
        startTime: meeting.startTime,
        endTime: nextMeeting.endTime
      }
      
      return [].concat(recurse(meetings, meeting));
    }
    
    if (nextMeeting.startTime > meeting.endTime) {
      let newMeeting = nextMeeting;
      let oldMeeting = meeting;
      return [].concat(oldMeeting, recurse(meetings, newMeeting));
    }
    
  }