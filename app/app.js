
var app =angular.module('SearchApp',[]);
app.controller('SearchController', SearchController)
    .service('filterService',filterService)
    .filter('SearchFilter', function() {
        return function(input,searchSting) {
            var fiterArr = [];
            var letterMatch = new RegExp(searchSting, 'i');
            angular.forEach(input,function(val,key){
                var item = val;
                if (letterMatch.test(item.firstName.substring(0, item.length))) {
                    fiterArr.push(item);
                }
            })
            return fiterArr;
        };
    });


SearchController.$inject = ['$scope','$http','filterService','$filter'];

function filterService ($http,$q) {
    var defferd = $q.defer();
    this.getData = function(){
        return $http.get('data.json').then(function(resp){
            defferd.resolve(resp);
            return defferd.promise;
        },function(resp){
            defferd.reject(resp);
            return defferd.promise;
        })
    }
}


function SearchController ($scope, $http, filterService, $filter) {
    var vm = this;
    vm.filterdData=[];
    vm.filterdArr=[];
    vm.getfilterQuery = getfilterQuery;
    vm.filterQuery = filterQuery;
    vm.removefilterSearch = removefilterSearch;

    /* Initializing the data*/
    function init () {
        var promiseObj = filterService.getData();
        promiseObj.then(function(result){
            vm.filterdData = result.data.data;
            vm.filterdArr = vm.filterdData;
        });
    }


    function getfilterQuery () {
        if(vm.filterSearch!="" && vm.filterSearch!= undefined){
            vm.filterdArr = $filter('SearchFilter')(vm.filterdData,vm.filterSearch);
        }
    }

    /*On Typing in textbox*/
    function filterQuery(){
        if(vm.filterSearch!="" && vm.filterSearch!= undefined) {
            getfilterQuery();
        }
        if(vm.filterSearch==""){
            vm.filterdArr = vm.filterdData;
        }
    }

    /*Function will clear the text of input box*/
    function removefilterSearch(){
        vm.filterdArr = vm.filterdData;
        vm.filterSearch="";
    }


    init();

}
