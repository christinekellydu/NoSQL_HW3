Question 1-

a- 
db.orders.aggregate( [{ $group: { _id: "$productName", sumQuantity: { $sum: "$quantity" } } }] ) 

b-
db.orders.aggregate( [
 { $match: { status: "urgent" } },
 { $group: { _id: "$productName", sumQuantity: { $sum: "$quantity" } } }
] )

c-
db.orders.aggregate( [
 { $group: { _id: { productName: "$productName", status: "$status"}, sumQuantity: { $sum: "$quantity" } } },
 { $sort: { _id: 1}}
 ] )

d-
db.orders.aggregate( [
 { $group: { _id: { productName: "$productName", status: "$status"}, sumQuantity: { $sum: "$quantity" } } },
 { $sort: { _id: 1}},
 { $skip: 1}
 ] )

Question 2

a- 
db.grades.distinct("class_id")

b-
db.grades.distinct("student_id")

c-
db.grades.aggregate([
    { 
        $unwind: "$scores"
    },
    {
        $group:
            {
                _id: "$scores",
                averageExamScore: { $avg: "$scores.exam"}
            }
    }
])

d- 
db.grades.aggregate([
    { 
        $unwind: "$scores"
    },
    {
        $group:
            {
                _id: "$scores",
                averageExamScore: { $stdDevSamp: "$scores.exam"}
            }
    }
])