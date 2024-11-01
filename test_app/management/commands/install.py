import os
from django.conf import settings
from django.core.management.base import BaseCommand
import subprocess

class Command(BaseCommand):
    help = "Installs npm packages in the static_src directory."

    def handle(self, *args, **kwargs):
        # Correct path to the static_src directory
        static_src_path = os.path.join(settings.BASE_DIR, 'test_app', 'static_src')
        try:
            # Run npm install in the static_src folder
            subprocess.check_call(['npm', 'install'], cwd=static_src_path)
            self.stdout.write(self.style.SUCCESS('Successfully installed npm packages.'))
        except subprocess.CalledProcessError as e:
            self.stdout.write(self.style.ERROR(f"An error occurred: {e}"))
        except FileNotFoundError as fnf_error:
            self.stdout.write(self.style.ERROR(f"FileNotFoundError: {fnf_error}"))
