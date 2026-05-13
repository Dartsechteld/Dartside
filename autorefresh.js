let autoRefreshBusy = false;

function startAutoRefresh(callback, interval){

  function run(){

    if(autoRefreshBusy){
      return;
    }

    autoRefreshBusy = true;

    Promise
      .resolve(callback())
      .finally(function(){

        autoRefreshBusy = false;

        setTimeout(
          run,
          interval
        );

      });

  }

  run();

}
