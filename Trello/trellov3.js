let myTodos = {
    day: 'Mon',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(meeting){
        this.meetings = this.meetings + meeting
    },

    meetingsDone: function(meeting){
        this.meetDone = this.meetDone + meeting
    },

    resetDay: function(){
        this.meetings = 0
        this.meetDone = 0
    },

    getSummaryOfDay: function(){
        console.log(`You have ${this.meetings - this.meetDone} meetings remaining for today`)
    }

}

 myTodos.addMeeting(5)
 myTodos.meetingsDone(3)
 myTodos.getSummaryOfDay()
 myTodos.resetDay()
 myTodos.addMeeting(3)
 myTodos.getSummaryOfDay()