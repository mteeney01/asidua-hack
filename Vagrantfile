Vagrant.configure('2') do |config|
    config.vm.box = 'azure'

    config.vm.provider :azure do |azure|
        azure.mgmt_certificate = 'C:\Users\afletche\HTNew\azureCert.pfx'
        azure.mgmt_endpoint = 'https://management.core.windows.net'
        azure.subscription_id = '170c7ee8-1da2-4364-aecd-c9cb18fd8a6e'

        azure.vm_image = 'b39f27a8b8c64d52b05eac6a62ebad85__Ubuntu-14_04-LTS-amd64-server-20140416.1-en-us-30GB'
        azure.vm_user = 'andrewfletcher' # defaults to 'vagrant' if not provided
        azure.vm_password = 'Pa$$w0rd' # min 8 characters. should contain a lower case letter, an uppercase letter, a number and a special character

        azure.vm_name = 'vm-docker-asidua-dev' # max 15 characters. contains letters, number and hyphens. can start with letters and can end with letters and numbers
        azure.vm_location = 'North Europe' # e.g., West US

      # Provide the following values if creating a *Nix VM
      azure.ssh_port = '22'

      azure.tcp_endpoints = '80:8080' # opens the Remote Desktop internal port that listens on public port 53389. Without this, you cannot RDP to a Windows VM.
    end
	
	$script = <<SCRIPT
		sudo apt-key adv --keyserver pgp.mit.edu --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
		echo "deb http://download.mono-project.com/repo/debian wheezy main" | sudo tee /etc/apt/sources.list.d/mono-xamarin.list
		sudo apt-get update
		sudo apt-get -y install curl unzip git-core mono-devel
		mozroots --import --sync
		curl https://raw.githubusercontent.com/aspnet/Home/master/kvminstall.sh | sh && source ~/.kre/kvm/kvm.sh && kvm upgrade
		
		apt-get -y install docker 
		
		git clone https://github.com/mteeney01/asidua-hack.git
		
	SCRIPT
	
	config.vm.provision "shell", inline: $script, privileged: false
    config.ssh.username = 'andrewfletcher' # the one used to create the VM
    config.ssh.password = 'Pa$$w0rd' # the one used to create the VM
end