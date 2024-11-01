import subprocess
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = "Runs Tailwind and React development servers together."

    def handle(self, *args, **kwargs):
        # Start Tailwind in watch mode
        tailwind_process = subprocess.Popen(['python', 'manage.py', 'tailwind', 'start'])
    

        try:
            tailwind_process.wait()
    
        except KeyboardInterrupt:
            tailwind_process.terminate()
        
        finally:
            tailwind_process.kill()
 
