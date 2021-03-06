@charset "UTF-8";

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
html,
body {
  height: 100vh;
  background: #101010;
}

.info {
  width: 100vw;
  position: fixed;
  bottom: 10px;
  text-align: center;
  font-size: 30px;
}

main {
  display: flex;
  justify-content: center;
}

.screenContainer {
  display: flex;
  justify-content: center;
}

#screen {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;
  -webkit-box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 1);
  width: 400px;
  height: 400px;
  display: inline-block;
  vertical-align: top;
}
@media only screen and (max-width: 600px) {
  #screen {
    width: 100vw;
    height: 100vw;
  }
}

#score {
  margin: 10px 0 0 20px;
  font-size: 13px;
  vertical-align: top;
  display: flex;
  justify-content: center;
  color: #eeeeee;
}
#score tr.header td {
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 8px;
}
#score tr.footer td {
  border-top: 1px solid #eeeeee;
  font-size: 11px;
}
#score td {
  padding-top: 5px;
  padding-bottom: 5px;
}
#score .socket-id {
  font-weight: normal;
  color: #eeeeee;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}
#score .score-value {
  font-weight: bold;
  color: #eeeeee;
  text-align: right;
}
#score .current-player .socket-id,
#score .current-player .score-value {
  color: #80f040;
}