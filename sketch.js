let line_height = 10;
let gap = 10;

function setup() {
  createCanvas(400, 400);
  background(220);
	
	//draw the box
	race_course_x = 100;
	race_course_y = 30;
	race_course_width = 100;
	race_course_height = 200;
	draw_race_course(race_course_x,race_course_y,race_course_width,race_course_height);
	
}

function draw() {
	
}

function draw_race_course(x,y,width,height)
{
	//draw the race course at given locations
	rect(x,y,width,height);
	stroke(3);
	//test the line method
	line_x = Math.floor(width/3);
	line_x2 = Math.floor(width * 2/3);
	
	console.log(line_x);
	console.log(line_x2);	
	//line(line_x + 100,0+30,line_x+100,line_height+30);
	//line(line_x + 100,line_height+gap+30,line_x+100,(line_height*2)+gap+30);
	//line(line_x + 100,line_height*2+gap+gap+30,line_x+100,(line_height*3)+gap +gap+30);
	//line(line_x + 100,0+30,line_x+100,line_height+30);
	//line(line_x + 100,0+30,line_x+100,line_height+30);
	//line(line_x + 100,0+30,line_x+100,line_height+30);
	
	current_line_y = 30;
	current_line_y_end = 30+line_height;
	current_line_x = line_x+100;
	
	for(let i=0;i<10;i++){
		line(current_line_x , current_line_y,current_line_x,current_line_y_end);
		current_line_y = gap+current_line_y_end;
		current_line_y_end = gap+current_line_y_end + line_height;
	}
	
	current_line_y = 30;
	current_line_y_end = 30+line_height;
	current_line_x = line_x2+100;
	
	
	//second row
	for(let i=0;i<10;i++){
	line(current_line_x , current_line_y,current_line_x,current_line_y_end);
		current_line_y = gap+current_line_y_end;
		current_line_y_end = gap+current_line_y_end + line_height;
	}
	
	//draw the cars on it
	
}
