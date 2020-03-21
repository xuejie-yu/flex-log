# Purpose
The purpose of this project to is provide a flexible way to consume logs for local development.
When developping the apps for nodejs, it is often that the target information is lost in tons of logs
generate by server. With flex-log, developers can filter out the logs he/she wants or specify the target format of 
logs to be displayed without affecting the raw log formatted that will be stored for production environment. In the context
of micro-services, it can serve as a central hub to pipe logs so that the business logic can be clearly reflected as logs.

# Features
The features of flex-log are straight forward. 

One way to filter logs is by key words filter against log lines.

The second way is to transform the format of log to the targeted formatted you want. This requires basic knowledge of JSON
data transformation.

# Use
The usage is as simple as `fl -p 9000 server.js` with the `-p` or `--port` to specify the UI the log center. For example, 
`fl -p 9000 server.js` will run log center UI on port `9000` and `node server.js` as it is.
