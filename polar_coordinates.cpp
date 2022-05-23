#include <bits/stdc++.h>
#include <math.h>
using namespace std;

class polar_coordinates
{
public:
    float Length; // r in normal units
    float Angle;  // theta in degrees
    double x_coord;
    double y_coord;

    polar_coordinates(float length, float angle)
    { // Constructor

        Length = length;
        Angle = angle;

        // converting degrees to radians
        double x = Angle * 3.14159 / 180;
        // x * 180/3.14 = Radians

        x_coord = Length * cos(x); // cos and sin takes inputs in radian form
        y_coord = Length * sin(x);
    }
    friend void operator-(polar_coordinates &p1, polar_coordinates &p2);
    //using friend function(part 2 of assignment)
};


void operator*(polar_coordinates &p1, polar_coordinates &p2)
//without using friend function
{
    double x_angle = p1.Angle + p2.Angle;

    if (x_angle >= 360)
    { //  for sin and cos (370 == 10)
        x_angle -= 360;
    }

    cout << "The resultant Magnitude after multiplication is " << p1.Length * p2.Length << endl;
    cout << "The resultant angle after multiplication is " << x_angle << endl;
    cout << "\n";
}



void operator-(polar_coordinates &p1, polar_coordinates &p2)
{
    p1.x_coord -= p2.x_coord;
    p1.y_coord -= p2.y_coord;

    double Angle_result = atan(abs(p1.y_coord) / (p1.x_coord)); // atan returns answer in radian form

    cout << "The resultant magnitude after subtraction is " << sqrt((p1.x_coord * p1.x_coord) + (p1.y_coord * p1.y_coord)) << endl;
    cout << "The resultant angle after subtraction is " << (180 * Angle_result) / M_PI << endl; // conversion to degree
    cout << "\n";
}



int main()
{
    float r, a, r1, a1;
    cout << "Enter magnitude and angle of first polar object : ";
    cin >> r >> a;

    cout << "Enter magnitude and angle of second polar object : ";
    cin >> r1 >> a1;

    polar_coordinates P1 = polar_coordinates(r, a);
    polar_coordinates P2 = polar_coordinates(r1, a1);

    cout << "\n";

    cout << "Using overloaded * to multiply two objects of polar in the form of P1 * P2 (where P1,P2 are polar objects)" << endl;

    P1 *P2;

    cout << "\n";

    cout << "Using overloaded - operator (binary) to subtract two objects of polar in the form of P1 - P2 (where P1,P2 are polar objects)" << endl;

    P1 - P2;

    return 0;
}