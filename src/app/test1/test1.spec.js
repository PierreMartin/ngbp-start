describe( 'Test1Ctrl', function() {
    describe( 'isCurrentUrl', function() {
        var Test1Ctrl;
        var $location;
        var $scope;

        beforeEach( module( 'ngBoilerplate.test1' ) );

        beforeEach( inject( function( $controller, _$location_, $rootScope ) {
            $location   = _$location_;
            $scope      = $rootScope.$new();
            Test1Ctrl   = $controller( 'Test1Ctrl', {
                $location: $location,
                $scope: $scope
            });
        }));



        // test 1 :
        it( 'should pass a dummy test', inject( function() {
            //expect( dropdownDemoItems[0] ).toEqual('aaa');
            //expect( dropdownDemoItems[0] == "aaa" ).toEqual();

            expect($scope.dropdownDemoItems[0]).toEqual("aaa");
        }));




    });
});
