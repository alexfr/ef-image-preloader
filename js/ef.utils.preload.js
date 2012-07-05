/**
 *  Simple, lightweight and flexible image preloader
 *  This is part of a much larger javascript library "ef", not currently open-source
 *  Copyright 2012 Alex Franzelin
 *  License Gpl 3.0
 *  This part of the ef-library is open-source, other parts may follow
 **/

// Define Base Object, keep things modular
var ef = {};

// Define utils Object
ef.utils = {};

// This is the actual preloading object
ef.utils.preload = {
    images: [],
    groups: {},
    
    add: function(target, group) {
        var hub = null;
        
        if(typeof(group) != 'undefined') {
            if(typeof(this.groups[group]) == 'undefined') {
                this.groups[group] = [];
            }
            
            hub = this.groups[group];
        } else {
            hub = this.images;
        }
        
        if(typeof(target) == 'object') {
            for(i=0;i<target.length;i++) {
                hub.push(target[i]);
            }
        } else {
            hub.push(target);
        }
    },
    
    run: function(group) {
        var hub = null;
        var img = new Image();
        
        if(typeof(group) != 'undefined') {
            if(group == 'all') {
                for(var i in this.groups) {
                    for(j=0;j<this.groups[i].length;j++) {
                        img.src = this.groups[i][j];
                    }
                }
                return true;
            } else if(typeof(this.groups[group]) == 'undefined') {
                return false;
            }
            
            hub = this.groups[group];
        } else {
            hub = this.images;
        }
            
        for(i=0;i<hub.length;i++) {
            img.src = hub[i];
        }
        
        return true;
    }
};