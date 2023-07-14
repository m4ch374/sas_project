# SAS Sensei: Home Loan Origination model

This documentation is authored by `Henry Wan`.
## :star: Project overview
SAS is the leader in ~~shitty web services~~ advanced analytics  and have some of the largest clients in the Australian Banking Industry.

The Australian mortgage market has become intensely competitive. As banks engage in a fierce battle to attract and retain customers, they may inadvertently lock in riskier customers on thin margins, affecting their long-term profitability. 

**By targeting this issue,** we aim to enhance decision-making, risk management, and overall performance in the mortage industry by developing a home loan origination model.

### :zzz::zzz:Anyways
Everything I've said above is useless bc `SAS` literally copied the whole prompt from `Keggle`.

> "Did you know SAS copied it from Keggle?" - Some smart dude in my team

:skull: Lol one of the largest privately owned tech companies in the world literally put in 0 effort, it's either lazy or busy.

#### `Verdict`: Garbage in garbage out: 0 input effort, 0 output effort 

----

## :droplet: Setting up the codebase

#### Note: 
```
Henry is dirt poor and could only afford apple juice as his only Apple product. Therefore the process of setting up the codebase *could* be inaccurate.
``` 

### 1. Overview
In this codebase, I have seperated it into 2 main parts: `./frontend` and `./backend`.

* `./frontend` mainly stores everything web related, which would be irrelevant to some of you.

* `./backend` is where we develop our `Home Loan Origination Model`:tm: in which I will spend a little bit more time talking about in the rest of this documentation

### 2. Setting up the frontend

`Prerequisites: npm, nvm, nodejs` (I think they're the same)
```shell
$ cd ./frontend
$ npm install

# To run the frontend
$ npm run dev
```

### 3. Setting up the backend
This is a relatively more important section of this piece of document so pay close attention.

`Prerequisites: Python 3.8+, pip`

I have made a small shell script that automatically install all dependencies, so run:
```shell
$ cd ./backend
$ sh install_dep.sh

# To run the backend server (not required to develop and test the models)
$ python3 manage.py runserver
```

:exclamation::exclamation: NOTE: If there are any new dependencies, feel free to add it to `./backend/dependencies.txt`

----

## :bulb: Backend Structure

This is arguably the most important part of this documentation.

### 1. General File Structure
In the scope of the `./backend` directory, the file structure could be represented as:
```
backend/
├─ server/
│  ├─ other files and folders
├─ models/
│  ├─ other files and folders
├─ Other files
```

* `./server` is the root server folder, no need to worry about it
* `./models` is probably a little bit misguiding as it is a "sub-process" of our backend
* The other files are just there to either: 
    * help with setting up or 
    * auto generated when `Django` initiates a new project

### 2. Developing your model
Now that we know how our backend is structured, I want to put a little bit more emphasis on the directory `./models`.

Note that there are a lot of files in it, but I would like to direct your attention to `./models/example` as it most likely would be how you'll be developing your model.

#### Let's focus on `./models/example/accurate_model.py`

Suppose you have a 100% accuracy model that with input `x` outputs `x + 1`.

```python
def accurate(num: int):
    return num + 1
```

That begs the question: "How do I test my program? :thinking:"

Quite easy actually:

1. Add the if statement to the end of the file
```python
if __name__ == "__main__": # <-------- This if statement
    # could be anything you want
    my_input = 1
    output = accurate(my_input)
    print(output) # prints output from our model
```

2. Given that you are already in the directory `./backend/models/example`
```shell
# run this command in the terminal
$ python3 accurate_model.py

# and you should get this output
2
```

**Q: Wait wait, so do I need connect it to the frontend?** :thinking::thinking:

No, you don't need to handle any sorts of `http` requests and responds, as long as your model (preferably in the form of a function) takes in some input (could be multiple) and produces an output, everything is g!

### 3. Adding a new model

Suppose you have created a model `logistic_regression.py`, you might ask yourself: "Where should I place this file?"

The short answer is: Anywhere in `./backend`

The long answer is: There might be an issue with top level imports in Python so it would be safer to do it in `./backend/models` instead.

----

## :ledger: Additional notes

1. If you are wondering how the backend interacts with your model, heres a quick rundown:
* `./models/views.py` Does the handling of requests and responses
* `./models/urls.py` Maps a link to a particular function (which the frontend could call)

2. The backend looks super bulky, is it necessary?
* No, but it looks good on your resume 
* And of them are boilerplates from `Django` which is designed for advanced backend systems
* But you could brag about making a "complex" backend in future interviews

3. Henry, your documentation is actually enjoying to read like no cap
* Thank you :blush: 
* ~~Read my documentations from other projects if you're interested~~
