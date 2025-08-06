/*************************************************************************
 * printable 712 coupler
 ************************************************************************/
// use <threads.scad>;
// use <smooth_prim.scad>;
// use <af-basics.scad>;

/* [Hidden] */
layer          =   0.12;

/* [Debug] */
// uncheck to export
DEBUG = true;
LAYERS = false;
CUT   = "x"; // [x,y,z]

/* [Settings] */
// number of fragments
$fn   =    256; // [0:1:256]
Electret_Height = 6.85;
// 4.60*9.7, 7*9.7, 5.3*6
Electret_Diameter = 9.70; // [5:.01:12]
// [layers]
Electret_Housing = 33; // [10:1:256]
// [layers]
Coupler_Height = 104; // [0:1:256]
Coupler_External_Diameter = 22; // [10:1:40]
Coupler_Diameter = 7.5; // [3:.1:9.5]

/* [Volume1] */
Volume1 = true;
// layers
Volume1_h = 26; // [6:2:60]
Volume1_l = 3.5;
Volume1_x = 7.5;
// layers
Volume1_z = 27; // [0:1:60]
// layers
Volume1_hz = 2; // [1:1:15]
Volume1_hy = .35; // [.05:.01:1]

/* [Volume2] */
Volume2 = true;
// layers
Volume2_h = 42; // [6:2:60]
Volume2_l = 3;
Volume2_x = 7.7;
// layers
Volume2_z = 67; // [0:1:60]
// layers
Volume2_hz = 2; // [1:1:15]
Volume2_hy = .35; // [.05:.01:1]

/* [Volume3] */
Volume3 = false;
// layers
Volume3_h = 26; // [6:2:60]
Volume3_l = 3.5;
Volume3_x = 7.5;
// layers
Volume3_z = 104; // [0:1:150]
// layers
Volume3_hz = 3; // [1:1:15]
Volume3_hy = .35; // [.05:.01:1]

////////////////////////////////////////////////////
//////////////////////////////////////////////////// Hidden Parameters
////////////////////////////////////////////////////
/* [Hidden] */

mic_holder_z = layer * Electret_Housing;

// thread_tolerance = 0.6;
// PITCH = 3.3;

// 134 * layer; // 16.06 -> 16.08
c_z = Coupler_Height * layer + mic_holder_z;
efn = 256;

volume1_h = Volume1_h * layer; // 3.12
volume1_l = Volume1_l;
volume1_x = Volume1_x; // centro horizontal
volume1_z = Volume1_z * layer; // 2.7 ->  centro vertical

volume1_dz = Volume1_hz * layer; // ducto
volume1_dy = Volume1_hy;

volume2_h = Volume2_h * layer; // 3.12
volume2_l = Volume2_l;
volume2_x = Volume2_x; // centro horizontal
volume2_z = Volume2_z * layer; // 2.7 ->  centro vertical

volume2_dz = Volume2_hz * layer; // ducto
volume2_dy = Volume2_hy;

volume3_h = Volume3_h * layer; // 3.12
volume3_l = Volume3_l;
volume3_x = Volume3_x; // centro horizontal
volume3_z = Volume3_z * layer; // 2.7 ->  centro vertical

volume3_dz = Volume3_hz * layer; // ducto
volume3_dy = Volume3_hy;

module c712(){
  difference(){
    cylinder(c_z,d=Coupler_External_Diameter, $fn = efn);

    union(){
      translate([0,0,Electret_Housing * layer])
        cylinder(c_z,d=Coupler_Diameter);

      if( Volume1 ){
        rotate( [0,0,0] )
          rotate_extrude()
          translate( [volume1_x,c_z-(volume1_z-volume1_h/2),0] )
          polygon( points=[[0,0], [-volume1_l/2,-volume1_h/2], [0,-volume1_h], [volume1_l/2,-volume1_h/2]] );

        translate( [-volume1_x,0,c_z-volume1_z] )
          cube([volume1_x, volume1_dy, volume1_dz]);
      }

      if( Volume2 ){
        rotate( [0,0,0] )
          rotate_extrude()
          translate( [volume2_x,c_z-(volume2_z-volume2_h/2),0] )
          polygon( points=[[0,0], [-volume2_l/2,-volume2_h/2], [0,-volume2_h], [volume2_l/2,-volume2_h/2]] );

        translate( [0,0,c_z-volume2_z] )
          cube([volume2_x, volume2_dy, volume2_dz]);
      }

      if( Volume3 ){
        rotate( [0,0,0] )
          rotate_extrude()
          translate( [volume3_x,c_z-(volume3_z-volume3_h/2),0] )
          polygon( points=[[0,0], [-volume3_l/2,-volume3_h/2], [0,-volume3_h], [volume3_l/2,-volume3_h/2]] );

        translate( [-volume3_x,0,c_z-volume3_z] )
          cube([volume3_x, volume3_dy, volume3_dz]);
      }

      // mic
      translate([0,0, mic_holder_z+0.001])
        mirror([0,0,-1])
        cylinder(mic_holder_z+1,d=Electret_Diameter);
    }
  }
}

iem_z = layer * 106; // 12.71 -> 12.72
iem_d = Coupler_External_Diameter;
iem_cono_d1 =  Coupler_Diameter;
iem_cono_d2 = 11.0;

module iem_coupler(){
  difference(){
    union(){
      // body
      cylinder(iem_z,d=iem_d, $fn=efn);
    }

    union(){
      // cono
      translate([0,0,-0.01])
        cylinder(iem_z+0.02, d1=iem_cono_d1, d2=iem_cono_d2);
    }
  }
}

difference(){
  union(){
    // iem copler
    union(){
      translate([0,0,c_z - 0.0001])
      iem_coupler();

      c712();

      if( DEBUG && LAYERS){
        for( i = [ 1 : 2 : Coupler_Height + Electret_Housing] ){
          translate( [0,0,i*layer] )
            # cylinder( layer, d=Coupler_External_Diameter );
        }
      }

      // 12.5, 7.8,
      /* translate([0,0,c_z]) */
      /*   mirror( [0,0,1] ) */
      /*   cylinder( 3.1, d=15 ); */

      /* translate( [10,0,-6.55] ) */
      /*   import( "711.stl" ); */
    }
  }

  if( DEBUG ){
    if( CUT != "none" ){
      c = 500;
      if ( CUT == "x" ){
        translate( [0,-(c/2),0] ) // x
          cube(c,center=true);
      } else if ( CUT == "y" ){
        translate( [-(c/2),0,0] ) // y
          cube(c,center=true);
      } else {
        translate( [0,0,c/2] )    // +z
          cube(c,center=true);
      }
    }
  }
}
