var exampleposts = [{"who": "aguy11", "title": "Wow, now I like this!", "Content": "Hey you innocent Humans!"}, {"who": "aguy11", "title": "Hey again!", "Content": `## Markdown
Do we like markdown? *Yes, we like markdown*
Do we like pizza? __Yes, we like pizza__
Do we like potatoes?... NO WE DON'T`}]
var post;
for (post = 0; post < exampleposts.length; post++){

  
  var new_post = document.createElement("div");
  new_post.innerHTML = "<h4>" + exampleposts[post]["who"] + "</h4><hr><h4><center>"+ exampleposts[post]["title"]+ "</center></h4><hr><mark-down breaks='1'>" + exampleposts[post]["Content"]; + "</mark-down>"
  new_post.className = "post";
  new_post.markdown = "1";
  
  document.body.appendChild(new_post);
}
