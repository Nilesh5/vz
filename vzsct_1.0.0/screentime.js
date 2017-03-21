var s = parent.window.document.body.firstChild;
 function loadLogCollector(content, success) {
     var str = content;
     var script = parent.window.document.createElement('script');
     script.text = str;
     s.parentNode.insertBefore(script, s);
     script.onload = script.onreadystatechange = function() {
         if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
             done = true;
             success();
             script.onload = script.onreadystatechange = null;
             parent.window.document.body.removeChild(script);
         }
     };
 }

 function loadScreenCall(url, success) {
     var script = parent.window.document.createElement('script');
     script.src = url;
     done = false;
     s.parentNode.insertBefore(script, s);
     console.log('after appending script :' + url);
     script.onload = script.onreadystatechange = function() {
         if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
             done = true;
             success();
             script.onload = script.onreadystatechange = null;
             parent.window.document.body.removeChild(script);
         }
     };
 }
 loadLogCollector('if (typeof logCollector === \'undefined\') {var logCollector = {};}', loadScreenCall('https://creative.vrtzads.com/jquery.js', function() {
     loadScreenCall('http://adsbeta1.vertoz.com/scripts/js/screentime.js', function() {
         loadScreenCall('http://adsbeta1.vertoz.com/scripts/js/screentimeCall.js', function() {
             loadScreenCall('http://adsbeta1.vertoz.com/scripts/js/unloadScript.js', function() {
                 loadLogCollector('defer1(\'3791a56b-32e8-4eda-a814-fac9a8f18926_0\');');
             });
         });
     })
 }));
