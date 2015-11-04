/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */

describe( 'Social 1', function() {

    var Social;
    // var $http;
    // var url = 'http://www.grafikart.fr/';

    beforeEach(function() {
        module('ngBoilerplate.home');
        inject(function(_Social_, $httpBackend) {
            //... ici on met ce qu'on veux qui est dans le module angularJs
            
            Social = _Social_;
            // $http = $httpBackend;
        });
    });


    // afterEach(function() {
    //     $http.verifyNoOutstandingExpectation();
    //     $http.verifyNoOutstandingRequest();
    // });


    describe('#getTwitterCount', function() {
        // is equal :
        it( 'Sould have a test 1', inject( function() {
            expect( "toto" == "toto" ).toBeTruthy();
        }));


        // is en function :
        it( 'Sould have a getTiwtterCompte method', inject( function() {
            expect(typeof Social.getTiwtterCompte  == "function").toBeTruthy();
        }));



        /////////////////////////////////////////////////////////////// requet nomber ///////////////////////////////////////////////////////////////
        // // if requet http is a JSONP
        // it( 'Sould call JSONP', inject( function() {
        //     $http.expectJSONP(Social.twitterAPI + url).respond(false);
        //     Social.getTiwtterCompte(url);
        //     $http.flush();
        // }));
        //
        //
        // //  count :
        // it( 'Sould return count', inject( function() {
        //     http.expectJSONP(Social.twitterAPI + url).respond({count: 2});
        //     Social.getTiwtterCompte(url).then(function(count){
        //         expect(count).toEqual(2);
        //     });
        //     $http.flush();
        // }));

    });


});










