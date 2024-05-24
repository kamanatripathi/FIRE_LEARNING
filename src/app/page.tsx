import Image from "next/image";
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "../components/ui/card";

export default function Home() {
  return (
    <>
<header className="bg-gray-900 text-white py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">FIRE LEARNING</h1>
        </div>
      
          <img
              alt="Logo"
              className="h-12 w-400"
              height="100"
              src="./fire.png"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
      </header>
      <main>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">FIRE LEARNING</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Shape Your Future - Ignite Your Potential!
                </p>
              </div>
            </div>
            <div className="container px-4 md:px-6">
         
            <Card>
                  <CardHeader>
                    <CardTitle>Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div>
                        <h4 className="font-semibold">FIRE Learning</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          B- 03, 3rd Floor, Goragandhi Apartment, opposite platform no.3, Shanti Nagar, Borivali West,
                          Mumbai, Maharashtra 400092
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Contact</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Phone: 7738045281
                          <br />
                          Email: firelearning360@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>FYJC, SYJC - Science</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Experiment, Excel - Your journey to scientific discovery begins here!</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>FYJC, SYJC - Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Master the art of commerce - Become a future business leader!</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>CA/CS Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sharpen your skills, conquer the exams - Become a Chartered Accountant or Company Secretary!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section />
    </main>
    </>
  );
}
