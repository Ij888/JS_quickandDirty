/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var events =(function(){
    var topics = {};
    var hOP = topics.hasOwnProperty;

        return{
            subscribe: function(topic, listener){
                //create the topics object if not yet created
                if(!hOP.call(topics, topic)) topics[topic] = [];
                
                //add the listener to queue
                var index = topics[topic].push(listener) -1;
                
                //provide handback for topic removal
                return{
                    remove: function(){
                        delete topics[topic][index];
                    }
                };
           },
publish: function(topic, info){
    //
    if(!hOP.call(topics, topic)) return;
    
    //cycle through topics queue, then execute.
    topics[topic].forEach(function(item){
            item(info !== undefined ? info :{});
         });
        }          
      };
})();


/*Publishing to a topic*/
events.publish('/page/load', {
    url: '/some/url/path' //any argument
});

/*Subscribing to said topic to receive events*/
var subscription = events.subscribe