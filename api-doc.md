# CashierApp

CashierApp is an application to manage your products. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

## RESTful endpoints

### POST / users / login-google

Request Header

<pre>
not needed
</pre>

Request Body

<pre>
{
    "google_token" : <</>token from getAuthResponse()</>>
}
</pre>

Response (201 - Create New User)

<pre>
{
  "id" : <</>new user id</>>,
  "email" : <</>new user email</>>,
  "access_token" : <</>access_token</>>,
}
</pre>

Response (200 - Ok)

<pre>
{
  "access_token" : <</>access_token</>>
}
</pre>

Response (500 - Internal Server Error)

<pre>
{
  "error" : 'Internal Server Error'
} 
</pre>

### POST / users / register

Request Header

<pre> not needed </pre>

Request Body

<pre>
{
    "username" : <</>username for new account</>>,
    "email" : <</>email for new account</>>,
    "password" : <</>password for new account</>>
}
</pre>

Response (201 - Ok)

<pre>
{
  "message" : <</>Success Registered!</>>
}
</pre>

Response (400 - Bad Request)

<pre>
{
    "error" : <</>errors</>>
}
</pre>

Response (500 - Internal Server Error)

<pre>
{
    "error": 'Internal Server Error'
}
</pre>

### POST / users/ login

Request Header

<pre> not needed </pre>

Request Body

<pre>
{
    "email": <</>user email</>>,
    "password": <</>user password</>>,
}
</pre>

Response (200 - OK)

<pre> 
{
    "access_token": "<</>your access token</>>"
} 
</pre>

Response (400 - Bad Request)

<pre> 
{
    "message": "<</>Error Massage</>>"
} 
</pre>

Response (500 - Internal Server Error)

<pre>
{
    "error": "Internal Server Error"
}
</pre>

### GET / brands

Request Headers

<pre>
{
    "access_token": "<</>your access token</>>"
} 
</pre>

Request Body

<pre>
  not needed
</pre>

Response (200 - OK)

<pre>
  [
    {
        "id": 1,
        "name": "AMD"
    },
    {
        "id": 2,
        "name": "Intel"
    },
    {
        "id": 3,
        "name": "Galax"
    },
    {
        "id": 4,
        "name": "Biostar"
    },
    {
        "id": 5,
        "name": "Ascrock"
    },
    {
        "id": 6,
        "name": "MSI"
    },
    {
        "id": 7,
        "name": "Gigabyte"
    },
    {
        "id": 8,
        "name": "Zotac"
    },
    {
        "id": 9,
        "name": "Kingston"
    },
    {
        "id": 10,
        "name": "V-GEN"
    },
    {
        "id": 11,
        "name": "Corsair"
    },
    {
        "id": 12,
        "name": "Logitech"
    },
    {
        "id": 13,
        "name": "Sades"
    },
    {
        "id": 14,
        "name": "Razer"
    }
]
</pre>

Response (500 - Internal Server Error)

<pre>
{
    "error": "Internal Server Error"
}
</pre>

### POST / brands

Request Headers

<pre>
{
    "access_token": "<</>your access token</>>"
} 
</pre>

Request Body

<pre>
{
    "name": <</>name brand</>>
}
</pre>

Response (201 - OK)

<pre>
  "message": <</>Success create new brand</>>
</pre>

Response (500 - Internal Server Error)

<pre>
{
    "error": "Internal Server Error"
}
</pre>

### GET / categories

Request Headers

<pre>
{
    "access_token": "<</>your access token</>>"
} 
</pre>

Request Body

<pre>
  not needed
</pre>

Response (200 - OK)

<pre>
  [
    {
        "id": 1,
        "name": "Processor"
    },
    {
        "id": 2,
        "name": "MotherBoard"
    },
    {
        "id": 3,
        "name": "Vga"
    },
    {
        "id": 4,
        "name": "Ram"
    },
    {
        "id": 5,
        "name": "Keyboard"
    }
]
</pre>

Response (500 - Internal Server Error)

<pre>
{
    "error": "Internal Server Error"
}
</pre>

### POST / categories

Request Headers

<pre>
{
    "access_token": "<</>your access token</>>"
} 
</pre>

Request Body

<pre>
{
    "name": <</>name category</>>
}
</pre>

Response (201 - OK)

<pre>
  "message": <</>Success create new category</>>
</pre>

Response (500 - Internal Server Error)

<pre>
{
    "error": "Internal Server Error"
}
</pre>

### GET / products

Request Headers

<pre>
{
    "access_token": "<</>your access token</>>"
} 
</pre>

Request Query

<pre>
{
    "page": "<</>set page</>>",
    "category": "<</>set categoryId</>>",
    "name": "<</>set name</>>"
} 
</pre>

Response (200 - OK)

<pre>
  {
    "count": 58,
    "rows": [
        {
            "id": 3,
            "name": "AMD Ryzen 7 Pinnacle Ridge 2700X 3.7Ghz Up To 4.3Ghz Cache 16MB 105W AM4 [Box] - 8 Core - YD270XBGAFBOX - With AMD Wraith Prism Cooler",
            "price": 3199000,
            "imageUrl": "https://res.cloudinary.com/iprojectcashier/image/upload/v1634632387/meprdop62vswirw5xna1.png",
            "stock": 45,
            "categoryId": 1,
            "brandId": 1,
            "createdAt": "2021-10-21T08:47:40.441Z",
            "updatedAt": "2021-10-21T14:25:48.993Z",
            "Brand": {
                "id": 1,
                "name": "AMD",
                "createdAt": "2021-10-21T08:47:40.436Z",
                "updatedAt": "2021-10-21T08:47:40.436Z"
            },
            "Category": {
                "id": 1,
                "name": "Processor",
                "createdAt": "2021-10-21T08:47:40.432Z",
                "updatedAt": "2021-10-21T08:47:40.432Z"
            }
        },
        {
            "id": 5,
            "name": "AMD Ryzen Threadripper 3970X 3.7Ghz Up To 4.5Ghz Cache 128MB 280W sTRX4 [BOX] - 32 Core - 100-100000011WOF",
            "price": 30699000,
            "imageUrl": "http://res.cloudinary.com/iprojectcashier/image/upload/v1634640628/qu8xmykoowvx7isdhz4c.jpg",
            "stock": 30,
            "categoryId": 1,
            "brandId": 1,
            "createdAt": "2021-10-21T08:47:40.441Z",
            "updatedAt": "2021-10-21T08:47:40.441Z",
            "Brand": {
                "id": 1,
                "name": "AMD",
                "createdAt": "2021-10-21T08:47:40.436Z",
                "updatedAt": "2021-10-21T08:47:40.436Z"
            },
            "Category": {
                "id": 1,
                "name": "Processor",
                "createdAt": "2021-10-21T08:47:40.432Z",
                "updatedAt": "2021-10-21T08:47:40.432Z"
            }
        },
        {
            "id": 4,
            "name": "AMD Ryzen 9 5950X 3.4Ghz Up To 4.9Ghz Cache 64MB 105W AM4 [Box] - 16 Core - 100-100000059WOF",
            "price": 12899000,
            "imageUrl": "http://res.cloudinary.com/iprojectcashier/image/upload/v1634640536/c3msxfhakpi1pgunzbkm.png",
            "stock": 30,
            "categoryId": 1,
            "brandId": 1,
            "createdAt": "2021-10-21T08:47:40.441Z",
            "updatedAt": "2021-10-21T08:47:40.441Z",
            "Brand": {
                "id": 1,
                "name": "AMD",
                "createdAt": "2021-10-21T08:47:40.436Z",
                "updatedAt": "2021-10-21T08:47:40.436Z"
            },
            "Category": {
                "id": 1,
                "name": "Processor",
                "createdAt": "2021-10-21T08:47:40.432Z",
                "updatedAt": "2021-10-21T08:47:40.432Z"
            }
        },
        {
            "id": 2,
            "name": "AMD Ryzen 5 3500 3.6Ghz Up To 4.1Ghz Cache 16MB 65W AM4 [Box] - 6 Core - 100-100000050BOX - With AMD Wraith Stealth Cooler",
            "price": 2649000,
            "imageUrl": "https://res.cloudinary.com/iprojectcashier/image/upload/v1634632296/nmrswwvkv8rwmmzecqqc.png",
            "stock": 30,
            "categoryId": 1,
            "brandId": 1,
            "createdAt": "2021-10-21T08:47:40.441Z",
            "updatedAt": "2021-10-21T08:47:40.441Z",
            "Brand": {
                "id": 1,
                "name": "AMD",
                "createdAt": "2021-10-21T08:47:40.436Z",
                "updatedAt": "2021-10-21T08:47:40.436Z"
            },
            "Category": {
                "id": 1,
                "name": "Processor",
                "createdAt": "2021-10-21T08:47:40.432Z",
                "updatedAt": "2021-10-21T08:47:40.432Z"
            }
        },
        {
            "id": 1,
            "name": "AMD Ryzen 3 3300X 3.8Ghz Up To 4.3Ghz Cache 16MB 65W AM4 [Box] - 4 Core - 100-100000159BOX - With AMD Wraith Stealth Cooler",
            "price": 2549000,
            "imageUrl": "https://res.cloudinary.com/iprojectcashier/image/upload/v1634632469/iukv0cfjbmi8dd56ltpb.jpg",
            "stock": 30,
            "categoryId": 1,
            "brandId": 1,
            "createdAt": "2021-10-21T08:47:40.441Z",
            "updatedAt": "2021-10-21T08:47:40.441Z",
            "Brand": {
                "id": 1,
                "name": "AMD",
                "createdAt": "2021-10-21T08:47:40.436Z",
                "updatedAt": "2021-10-21T08:47:40.436Z"
            },
            "Category": {
                "id": 1,
                "name": "Processor",
                "createdAt": "2021-10-21T08:47:40.432Z",
                "updatedAt": "2021-10-21T08:47:40.432Z"
            }
        },
        {
            "id": 10,
            "name": "Intel Xeon BRONZE 3106, 1.70Ghz, Cache 11MB, LGA 3647",
            "price": 5208000,
            "imageUrl": "https://res.cloudinary.com/iprojectcashier/image/upload/v1634642049/hsvctonjutrlnlfav6aw.jpg",
            "stock": 30,
            "categoryId": 1,
            "brandId": 2,
            "createdAt": "2021-10-21T08:47:40.441Z",
            "updatedAt": "2021-10-21T08:47:40.441Z",
            "Brand": {
                "id": 2,
                "name": "Intel",
                "createdAt": "2021-10-21T08:47:40.436Z",
                "updatedAt": "2021-10-21T08:47:40.436Z"
            },
            "Category": {
                "id": 1,
                "name": "Processor",
                "createdAt": "2021-10-21T08:47:40.432Z",
                "updatedAt": "2021-10-21T08:47:40.432Z"
            }
        },
        {
            "id": 9,
            "name": "Intel Core i9-9980XE 3.0Ghz Up To 4.4Ghz - Cache 24.75MB [Box] Socket LGA 2066 - Skylake-X Series",
            "price": 28150000,
            "imageUrl": "http://res.cloudinary.com/iprojectcashier/image/upload/v1634640775/xxmxaqjgi6yaoyqn7nhm.jpg",
            "stock": 30,
            "categoryId": 1,
            "brandId": 2,
            "createdAt": "2021-10-21T08:47:40.441Z",
            "updatedAt": "2021-10-21T08:47:40.441Z",
            "Brand": {
                "id": 2,
                "name": "Intel",
                "createdAt": "2021-10-21T08:47:40.436Z",
                "updatedAt": "2021-10-21T08:47:40.436Z"
            },
            "Category": {
                "id": 1,
                "name": "Processor",
                "createdAt": "2021-10-21T08:47:40.432Z",
                "updatedAt": "2021-10-21T08:47:40.432Z"
            }
        },
        {
            "id": 8,
            "name": "Intel Core i7-7820X 3.6Ghz Up To 4.3Ghz - Cache 11MB [Box] Socket LGA 2066 - Skylake-X Series",
            "price": 9600000,
            "imageUrl": "https://res.cloudinary.com/iprojectcashier/image/upload/v1634642049/hsvctonjutrlnlfav6aw.jpg",
            "stock": 30,
            "categoryId": 1,
            "brandId": 2,
            "createdAt": "2021-10-21T08:47:40.441Z",
            "updatedAt": "2021-10-21T08:47:40.441Z",
            "Brand": {
                "id": 2,
                "name": "Intel",
                "createdAt": "2021-10-21T08:47:40.436Z",
                "updatedAt": "2021-10-21T08:47:40.436Z"
            },
            "Category": {
                "id": 1,
                "name": "Processor",
                "createdAt": "2021-10-21T08:47:40.432Z",
                "updatedAt": "2021-10-21T08:47:40.432Z"
            }
        },
        {
            "id": 7,
            "name": "Intel Core i5-7640X 4.0Ghz Up To 4.2Ghz - Cache 6MB [Box] Socket LGA 2066 - Kabylake-X Series",
            "price": 3915000,
            "imageUrl": "https://res.cloudinary.com/iprojectcashier/image/upload/v1634642049/hsvctonjutrlnlfav6aw.jpg",
            "stock": 30,
            "categoryId": 1,
            "brandId": 2,
            "createdAt": "2021-10-21T08:47:40.441Z",
            "updatedAt": "2021-10-21T08:47:40.441Z",
            "Brand": {
                "id": 2,
                "name": "Intel",
                "createdAt": "2021-10-21T08:47:40.436Z",
                "updatedAt": "2021-10-21T08:47:40.436Z"
            },
            "Category": {
                "id": 1,
                "name": "Processor",
                "createdAt": "2021-10-21T08:47:40.432Z",
                "updatedAt": "2021-10-21T08:47:40.432Z"
            }
        },
        {
            "id": 6,
            "name": "Intel Core i3-9100 3.6Ghz Up To 4.2Ghz - Cache 6MB [Box] Socket LGA 1151V2 - Coffeelake Series",
            "price": 2210000,
            "imageUrl": "http://res.cloudinary.com/iprojectcashier/image/upload/v1634640694/weyufj3xgw4wnzkxfijb.jpg",
            "stock": 30,
            "categoryId": 1,
            "brandId": 2,
            "createdAt": "2021-10-21T08:47:40.441Z",
            "updatedAt": "2021-10-21T08:47:40.441Z",
            "Brand": {
                "id": 2,
                "name": "Intel",
                "createdAt": "2021-10-21T08:47:40.436Z",
                "updatedAt": "2021-10-21T08:47:40.436Z"
            },
            "Category": {
                "id": 1,
                "name": "Processor",
                "createdAt": "2021-10-21T08:47:40.432Z",
                "updatedAt": "2021-10-21T08:47:40.432Z"
            }
        }
    ]
}
</pre>

Response (500 - Internal Server Error)

<pre>
{
    "error": "Internal Server Error"
}
</pre>

### GET / products / :productId

Request Headers

<pre>
{
    "access_token": "<</>your access token</>>"
} 
</pre>

Request Params

<pre>
  "productId": "<</>ID Product</>>"
</pre>

Response (200 - OK)

<pre>
  {
    "id": 2,
    "name": "AMD Ryzen 5 3500 3.6Ghz Up To 4.1Ghz Cache 16MB 65W AM4 [Box] - 6 Core - 100-100000050BOX - With AMD Wraith Stealth Cooler",
    "price": 2649000,
    "imageUrl": "https://res.cloudinary.com/iprojectcashier/image/upload/v1634632296/nmrswwvkv8rwmmzecqqc.png",
    "stock": 30,
    "categoryId": 1,
    "brandId": 1,
    "createdAt": "2021-10-21T08:47:40.441Z",
    "updatedAt": "2021-10-21T08:47:40.441Z"
}
</pre>

Response (500 - Internal Server Error)

<pre>
{
    "error": "Internal Server Error"
}
</pre>

### POST / products

Request Headers

<pre>
{
    "access_token": "<</>your access token</>>"
} 
</pre>

Request Body

<pre>
{
    "name": <</>name product</>>,
    "price": <</>price product</>>,
    "imageUrl": <</>imageUrl product</>>,
    "stock": <</>stock product</>>,
    "categoryId": <</>categoryId product</>>,
    "brandId": <</>brandId product</>>
}
</pre>

Response (201 - Create new product)

<pre>
  {
    "id": 59,
    "name": "AMD Bristol Ridge A6-9500 (Radeon R5 Series) 3.5Ghz Up To 3.8Ghz Cache 1MB 65W Socket AM4 [Box] - 3 Core - AD9500AGABBOX",
    "price": 799000,
    "imageUrl": "https://i.ibb.co/7K0Zc89/product4.jpg",
    "stock": 30,
    "categoryId": 1,
    "brandId": 1,
    "updatedAt": "2021-10-21T18:26:23.709Z",
    "createdAt": "2021-10-21T18:26:23.709Z"
}
</pre>

Response (404 - Not Found)

<pre>
  "message": "<</>Image not found!</>>"
</pre>

Response (500 - Internal Server Error)

<pre>
{
    "error": "Internal Server Error"
}
</pre>

### PUT / products / :productId

Request Headers

<pre>
{
    "access_token": "<</>your access token</>>"
} 
</pre>

Request Params

<pre>
  "productId": "<</>ID Product</>>"
</pre>

Response (200 - OK)

<pre>
  "message": "<</>Success edit product</>>"
</pre>

Response (404 - Not Found)

<pre>
  "message": "<</>Product not found</>>"
</pre>

Response (500 - Internal Server Error)

<pre>
{
    "error": "Internal Server Error"
}
</pre>

### DEL / products / :productId

Request Headers

<pre>
{
    "access_token": "<</>your access token</>>"
} 
</pre>

Request Params

<pre>
  "productId": "<</>ID Product</>>"
</pre>

Response (200 - OK)

<pre>
  "message": "<</>Product has been deleted</>>"
</pre>

Response (404 - Not Found)

<pre>
  "message": "<</>Product not found</>>"
</pre>

Response (500 - Internal Server Error)

<pre>
{
    "error": "Internal Server Error"
}
</pre>

### POST / transactions / :productId

Request Headers

<pre>
{
    "access_token": "<</>your access token</>>"
} 
</pre>

Request Body

<pre>
{
    "userId": <</>ID from user</>>,
    "productId": <</>ID from product</>>,
    "totalAmount": <</>totalAmount</>>,
    "totalQuantity": <</>totalQuantity</>>
}
</pre>

Response (201 - OK)

<pre>
  {
    "userId": 1,
    "productId": 5,
    "totalAmount": "1000000",
    "totalQuantity": "3",
    "updatedAt": "2021-10-21T18:45:30.734Z",
    "createdAt": "2021-10-21T18:45:30.734Z"
}
</pre>

Response (400 - Bad Request)

<pre>
  "message": <</>Transaction failed</>>,
</pre>

Response (404 - Not Found)

<pre>
  "message": <</>Product not found</>>,
</pre>

Response (500 - Internal Server Error)

<pre>
{
    "error": "Internal Server Error"
}
</pre>

### GET / transactions / :id

Request Headers

<pre>
{
    "access_token": "<</>your access token</>>"
} 
</pre>

Request Body

<pre>not needed</pre>

Request Params

<pre>
  "id": "<</>ID Transactions</>>"
</pre>

Response (200 - OK)

<pre>
  {
    "count": 1,
    "rows": [
        {
            "userId": 1,
            "productId": 5,
            "totalAmount": "1000000",
            "totalQuantity": "3",
            "createdAt": "2021-10-21T18:45:30.734Z",
            "updatedAt": "2021-10-21T18:45:30.734Z",
            "id": 1,
            "User": {
                "id": 1,
                "username": "Arif Rahman",
                "email": "admin@gmail.com",
                "password": "$2b$10$Y3GkqZFk2abdeh298MsqRuXS9dKzIQi.Xkk2N8mla9wgUNAX1shdy",
                "role": "Admin",
                "status": "active",
                "createdAt": "2021-10-21T08:47:40.379Z",
                "updatedAt": "2021-10-21T08:47:40.379Z"
            },
            "Product": {
                "id": 5,
                "name": "AMD Ryzen Threadripper 3970X 3.7Ghz Up To 4.5Ghz Cache 128MB 280W sTRX4 [BOX] - 32 Core - 100-100000011WOF",
                "price": 30699000,
                "imageUrl": "http://res.cloudinary.com/iprojectcashier/image/upload/v1634640628/qu8xmykoowvx7isdhz4c.jpg",
                "stock": 30,
                "categoryId": 1,
                "brandId": 1,
                "createdAt": "2021-10-21T08:47:40.441Z",
                "updatedAt": "2021-10-21T08:47:40.441Z"
            }
        }
    ]
}
</pre>

Response (404 - Not Found)

<pre>
{
    "message": "Transaction not found!"
}
</pre>

Response (500 - Internal Server Error)

<pre>
{
    "error": "Internal Server Error"
}
</pre>
