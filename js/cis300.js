
// scotchApp.controller('cis300Controller', function($scope){
//     $scope.message = "This is the CIS-300 Section."
// });
    //create new module and fetch json data
//inject angular file upload directives and services.

scotchApp.controller('cis300Controller', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
    $scope.message = 'This is a the CIS-300 Section.';
    
    $scope.uploadFiles = function(file, errFiles) {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: 'C:/Users/vish/Desktop/xu/web/views/',
                data: {file: file}
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });
        }   
    }
}]);

