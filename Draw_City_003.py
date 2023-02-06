"""
# Import libraries
import rhinoscriptsyntax as rs
import random

# Clear Existing
rs.DeleteObjects (rs.AllObjects())

# Set base size and number of lots
citySizeX = 30.0 #250 set in inches for 3d print
citySizeY = 15.0 #500
nrLotsX = 20
nrLotsY = 20

# Create the base
#def makePath (

#rs.AddRectangle(
plane = rs.WorldXYPlane()
boundary = rs.AddRectangle (plane, citySizeX, citySizeY)
path = rs.AddLine([0,0,0],[0,0,-.25])
srf = rs.AddPlanarSrf(boundary)
rs.ExtrudeSurface(srf,path,True)

# Set the location of open space
openSpace = rs.GetPoint ("select location for open space")
rs.AddPoint (openSpace)

# Set the location of city center
cityCenter = rs.GetPoint ("select location for city center")
rs.AddPoint (cityCenter)

# Caculate the size of each lot. Ths affects how much of the base is occupied
lotSizeX = (citySizeX / nrLotsX) 
lotSizeY = (citySizeY / nrLotsY) 

def makeBuilding (lot, height):
    
    origin = (0,0,0)
    endPoint = (0,0,height*.99) # edit to control max building height
    midPointInfo = rs.CurveAreaCentroid(lot)
    midPoint = midPointInfo[0]
    distance = rs.Distance (midPoint, openSpace)
    if (distance > lotSizeX * 2):
        plan = rs.OffsetCurve (lot, midPoint, .01 * lotSizeX) # edit the multiplier to control the tall building
        facade = rs.ExtrudeCurveStraight (plan, origin, endPoint )
        rs.CapPlanarHoles (facade)
        #print building
        return facade

# auxiliar function to determine a midpoint
# works with coordinates, not Rhino objects
def midpoint (p1,p2):
    p1top2 = rs.VectorCreate (p2,p1)
    smallP1top2 = rs.VectorScale (p1top2, 0.5)
    mid = rs.VectorAdd (p1, smallP1top2)
    return mid

#gets address of a building
#street and avenue according to the way buildings were added to city list
#city is now a list of lists of lists
def getAddress (selected):
    #search for a user-defined object
    found = False
    strNumber = 0
    for street in city:
        avNumber = 0
        for building in street:
            for part in building:
                if part == selected:
                    found = True
            if found:
                break
            else:
                avNumber = avNumber + 1
        if found:
            break
        else:
            strNumber = strNumber + 1
    print ("Address: "+ str(strNumber) +"th street, "+ str(avNumber) +"th avenue")


rs.EnableRedraw (False)

city = []
buildings = []

# creates city buildings, except around open space location
# height is dependent on distance to city center
for j in range (0, nrLotsY):
    street = []
    for i in range (0, nrLotsX):
        #print ("coord: " + str(i) + ";" + str(j))
        movedPlane = rs.MovePlane (plane, (i*lotSizeX,j*lotSizeY,0))
        newLot = rs.AddRectangle (movedPlane, lotSizeX, lotSizeY)
        
        buildingPoint = rs.CurveStartPoint (newLot)
        distCenter = rs.Distance (cityCenter, buildingPoint)
        
        centerFactor = 1.0/distCenter
        #print centerFactor
        
        currHeight = random.uniform (.1, 3) * (1+centerFactor) # edit to adjust average height range
        newBuilding = makeBuilding (newLot, currHeight/2)
        if newBuilding:
            street.append ([newBuilding])
            buildings.append(newBuilding)
        else:
            street.append ([newLot])
        rs.DeleteObject(newLot)
    city.append (street)

# vertically subdivides a building in two parts
def refineBuilding (building):
    bb = rs.BoundingBox (building)
    origin = midpoint (bb[0], bb[2])
    bottom = rs.ScaleObject (building, origin, (1,1,0.5))
    bbb = rs.BoundingBox (bottom)
    translation = rs.VectorCreate (bbb[4], bbb[0])
    top = rs.CopyObject (bottom, translation)
    topOrigin = midpoint (bbb[4],bbb[6])
    smalltop = rs.ScaleObject (top, topOrigin, (0.8,0.8,1))

#myBuilding = rs.GetObject ("Select building to refine")
#while myBuilding:
#    refineBuilding (myBuilding)
#    myBuilding = rs.GetObject ("Select building to refine")

rs.EnableRedraw (True)

#opens an avenue across the city
x = citySizeX/nrLotsX
y = citySizeY/nrLotsY
z = 0

for i in range(10):
    i = i + 10
    mainAxisLine = rs.AddLine ([x/2+i,0,0],[x/2+i,citySizeY,0])
    #mainAxisLine = rs.AddLine ([0,z+y,0],[citySizeX,z+y,0])
    mainAxisPipe = rs.AddPipe (mainAxisLine,0,lotSizeX/10)
    for j in buildings:
        if rs.IsObject(j):
            result = rs.IntersectBreps(mainAxisPipe, j)
            if result != None:
                rs.DeleteObject(j)
                rs.DeleteObject(result[0])
    rs.DeleteObject(mainAxisPipe)
    rs.DeleteObject(mainAxisLine)
    #rs.DeleteObject(result)
        #rs.DeleteObject (result)

z = 0

#for i in range(10):
#    i = i + 2
    #mainAxisLine = rs.AddLine ([x/2+i,0,0],[x/2+i,citySizeY,0])
#    mainAxisLine = rs.AddLine ([0,z+y,0],[citySizeX,z+y,0])
#    mainAxisPipe = rs.AddPipe (mainAxisLine,0,lotSizeX/10)
#    for j in buildings:
#        if rs.IsObject(j):
#            result = rs.IntersectBreps(mainAxisPipe, j)
#            if result != None:
#                rs.DeleteObject(j)
#                rs.DeleteObject(result[0])
#    rs.DeleteObject(mainAxisPipe)
#    rs.DeleteObject(mainAxisLine)
    #rs.DeleteObject(result)
        #rs.DeleteObject (result)

for i in range(1):
    for i in buildings:
        if rs.IsObject(i):
            refineBuilding(i)

#mainAxis = rs.GetLine (mode=1, message1="draw main axis")
#mainAxisLine = rs.AddLine (mainAxis[0], mainAxis[1])
#mainAxisPipe = rs.AddPipe (mainAxisLine,0,lotSizeX/2.5)

#for building in buildings:
#    result = rs.IntersectBreps (mainAxisPipe, building)
#    if result:
#        rs.DeleteObject (building)
#        rs.DeleteObject (result)


#get adress from selected building
myBuilding = rs.GetObject ("Select building to get address")
while myBuilding:
    getAddress (myBuilding)
    myBuilding = rs.GetObject ("Select building to get address")
"""
