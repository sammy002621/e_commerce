
#include<iostream>
using namespace std;




const int MAX_CAPACITY = 100;
class Stack {
    private:

    char arr[MAX_CAPACITY];
    int top;


    public:
    Stack(){
        top=-1;
    }


    void push (char c){
        if(top == MAX_CAPACITY-1){
            cout<<" Stack overflow "<<endl;
            return;
        }

        arr[++top]=c;
    }

    char pop(){
        if(top==-1){
            cout<<" stack underflow"<<endl;
            return ' ';
        }


    return arr[top--];
    }

    bool isEmpty(){
        return top == -1;
    }


};


int main(){

  // creating an empty stack 
    Stack stack1;
    string string1;
    string reversedString1;


// getting the string from the user 
    cout<<" Enter string to be reversed :";
    getline(cin,string1);


    cout<<"The original string is :"<<string1<<endl;

//Pushing characters in the stack 

    for(char c : string1){
        stack1.push(c);
        cout<<" the pushed string is :"<<c<<endl;
    }


//Popping characters from the stack and store them in the specified string 


while(!stack1.isEmpty()){
    reversedString1+=stack1.pop();
}

cout<<"The reversed string is : "<<reversedString1;

/*
My observation is that the original string that we have from the user is being reversed because to put elements in a stack it uses the LIFO
when we pop (remove) the elements and print them in the console they come in a reversed order if for example the input was "yours" then upon 
insertion in the stack we would have :
                s
                r
                u
                o
                y
upon popping the top would be s there for we would have "sruoy" as the reversed string of our input after the concatenation
*/ 


}